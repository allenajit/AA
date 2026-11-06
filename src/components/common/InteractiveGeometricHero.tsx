import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export const InteractiveGeometricHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    // Mouse coordinates relative to canvas center
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate 3D icosahedron / geometric vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseRadius = Math.min(width, height) * 0.28;

    const rawVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },
      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },
      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 },
    ].map((v) => ({
      x: v.x * (baseRadius / 2),
      y: v.y * (baseRadius / 2),
      z: v.z * (baseRadius / 2),
    }));

    // Floating orbital ambient particles
    const particleCount = 28;
    const ambientParticles: Point3D[] = Array.from({ length: particleCount }, () => {
      const theta = Math.random() * Math.PI * 2;
      const u = Math.random() * 2 - 1;
      const r = baseRadius * (1.1 + Math.random() * 0.7);
      return {
        x: r * Math.sqrt(1 - u * u) * Math.cos(theta),
        y: r * Math.sqrt(1 - u * u) * Math.sin(theta),
        z: r * u,
      };
    });

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
      mouseY = (e.clientY - rect.top - height / 2) / (height / 2);
      targetRotY = mouseX * 0.6;
      targetRotX = -mouseY * 0.6;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let angleAuto = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto rotation + responsive mouse tilt
      if (!prefersReducedMotion) {
        angleAuto += 0.005;
        currentRotX += (targetRotX - currentRotX) * 0.04;
        currentRotY += (targetRotY - currentRotY) * 0.04;
      }

      const rotX = currentRotX + Math.sin(angleAuto * 0.5) * 0.15;
      const rotY = currentRotY + angleAuto;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Project 3D point to 2D
      const project = (p: Point3D) => {
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective division
        const distance = 600;
        const perspective = distance / (distance + z2);

        return {
          x: width / 2 + x1 * perspective,
          y: height / 2 + y2 * perspective,
          scale: perspective,
          z: z2,
        };
      };

      const projectedVertices = rawVertices.map(project);
      const projectedParticles = ambientParticles.map(project);

      // Colors based on current theme
      const isDark = theme === 'dark';
      const edgeColor = isDark ? 'rgba(212, 255, 0, 0.18)' : 'rgba(101, 163, 13, 0.22)';
      const nodeColor = isDark ? '#d4ff00' : '#4d7c0f';
      const particleColor = isDark ? 'rgba(212, 255, 0, 0.35)' : 'rgba(101, 163, 13, 0.3)';

      // Draw geometric edges between near vertices
      ctx.lineWidth = 1;
      for (let i = 0; i < projectedVertices.length; i++) {
        for (let j = i + 1; j < projectedVertices.length; j++) {
          const p1 = rawVertices[i];
          const p2 = rawVertices[j];
          const dist3D = Math.hypot(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z);

          // Threshold for icosahedron edges
          if (dist3D < baseRadius * 1.15) {
            const v1 = projectedVertices[i];
            const v2 = projectedVertices[j];

            ctx.beginPath();
            ctx.moveTo(v1.x, v1.y);
            ctx.lineTo(v2.x, v2.y);
            ctx.strokeStyle = edgeColor;
            ctx.stroke();
          }
        }
      }

      // Draw vertices nodes
      projectedVertices.forEach((v) => {
        const radius = Math.max(1.8, 3.2 * v.scale);
        ctx.beginPath();
        ctx.arc(v.x, v.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.shadowColor = nodeColor;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw ambient orbital particles with subtle connectors
      projectedParticles.forEach((p) => {
        const radius = Math.max(1, 1.8 * p.scale);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-70 sm:opacity-90">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
};

