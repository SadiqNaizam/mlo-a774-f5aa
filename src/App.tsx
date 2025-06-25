import React from 'react';
import { Outlet } from 'react-router-dom';

// Import layout components
import Header from './components/layout/Header';

// The Toaster component is required for notifications
import { Toaster } from 'sonner';

/**
 * The main application shell for the dashboard.
 * It provides a consistent layout (Header) across all pages
 * and renders the current page's content via the <Outlet /> component.
 */
const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground font-sans">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Outlet />
      </main>
      <Toaster richColors />
    </div>
  );
};

export default App;