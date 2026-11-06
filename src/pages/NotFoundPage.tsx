import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

interface NotFoundPageProps {
  onOpenResume: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onOpenResume }) => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-dark-950 text-zinc-900 dark:text-zinc-100 font-urbanist flex flex-col justify-between transition-colors duration-300">
      <Navbar onOpenResume={onOpenResume} />

      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-dark-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mx-auto text-lime-deep dark:text-lime-accent shadow-sm">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-lime-deep dark:text-lime-accent font-bold">
              Error 404 // Lost in Transit
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white font-urbanist mt-1">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              The page or route you navigated to does not exist in Allen Ajit's portfolio system.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-lime-accent text-dark-950 hover:bg-lime-glow transition-all shadow-glow-lime"
            >
              <Home className="w-4 h-4" />
              <span>Return to Portfolio Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer onOpenResume={onOpenResume} />
    </div>
  );
};

