import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/app/ThemeProvider';
import { RouteErrorBoundary } from '@/app/ErrorBoundary';
import { AppLayout } from '@/app/AppLayout';
import { appRoutes } from '@/app/routes';
import { ToastProvider } from '@/components/ui';

// Inner component to leverage routing hook within BrowserRouter context
const AppContent: React.FC = () => {
  const routesElement = useRoutes([
    {
      element: <AppLayout />,
      children: appRoutes,
    },
  ]);
  return routesElement;
};

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ToastProvider>
          <RouteErrorBoundary>
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </RouteErrorBoundary>
        </ToastProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
