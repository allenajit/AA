/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          950: '#070709',
          900: '#0d0d11',
          850: '#121217',
          800: '#181820',
          750: '#1e1e28',
          700: '#272734',
        },
        light: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          800: '#27272a',
          900: '#18181b',
        },
        lime: {
          accent: '#d4ff00',
          glow: '#ccff00',
          muted: '#a6cc00',
          dark: '#1e2600',
          deep: '#4d7c0f',
        }
      },
      boxShadow: {
        'glow-lime': '0 0 25px -5px rgba(212, 255, 0, 0.35)',
        'glow-lime-lg': '0 0 50px -10px rgba(212, 255, 0, 0.3)',
        'glow-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'light-card': '0 10px 30px -10px rgba(0, 0, 0, 0.07)',
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'tight-heading': '-0.035em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 16s linear infinite',
      }
    },
  },
  plugins: [],
}
