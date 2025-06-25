import React from 'react';

// Import layout components
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

// Import organism components
import HeroBanner from '../components/HeroBanner/HeroBanner';
import NewsletterForm from '../components/Newsletter/NewsletterForm';

// The Toaster component is required for the NewsletterForm's toast notifications
import { Toaster } from 'sonner';

/**
 * The main landing page for Pulse Robot.
 * It implements the LandingLayout structure by composing the Header, NewsletterForm,
 * HeroBanner, and Footer components in a clean, vertically stacked, and centered layout.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background text-foreground font-sans">
      {/* A container to enforce consistent max-width and horizontal padding */}
      <div className="w-full max-w-6xl px-4 md:px-8">
        <Header />
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-center py-16 sm:py-20 md:py-24">
        {/* This inner container manages the spacing between the main page elements */}
        <div className="flex w-full flex-col items-center gap-16 px-4 md:gap-20 md:px-8">
          <NewsletterForm />
          <HeroBanner />
        </div>
      </main>

      <Footer />
      
      {/* Toaster for displaying notifications from the NewsletterForm submission */}
      <Toaster richColors />
    </div>
  );
};

export default IndexPage;