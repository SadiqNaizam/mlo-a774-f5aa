import React from 'react';
import { Outlet } from 'react-router-dom';

// Import layout components
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

// The Toaster component is required for the NewsletterForm's toast notifications
import { Toaster } from 'sonner';

/**
 * The main application shell.
 * It provides a consistent layout (Header, Footer) across all pages
 * and renders the current page's content via the <Outlet /> component.
 */
const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background text-foreground font-sans">
      {/* A container to enforce consistent max-width and horizontal padding */}
      <div className="w-full max-w-6xl px-4 md:px-8">
        <Header />
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-center py-16 sm:py-20 md:py-24">
        <Outlet />
      </main>

      <Footer />
      
      {/* Toaster for displaying notifications from any page */}
      <Toaster richColors />
    </div>
  );
};

export default App;