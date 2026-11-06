import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { CustomCursor } from './components/common/CustomCursor';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ResumeModal } from './components/resume/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          {/* Custom Desktop Precision Cursor */}
          <CustomCursor />

          {/* Router Views */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/project/:id"
              element={<ProjectDetailPage onOpenResume={() => setIsResumeOpen(true)} />}
            />
            <Route
              path="*"
              element={<NotFoundPage onOpenResume={() => setIsResumeOpen(true)} />}
            />
          </Routes>

          {/* Global Resume Modal */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
