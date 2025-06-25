import React from 'react';

// Import organism components
import HeroBanner from '../components/herobanner/herobanner';
import NewsletterForm from '../components/newsletter/newsletterform';
import Stats from '../components/stats/stats';

/**
 * The main landing page for Pulse Robot.
 * It implements the LandingLayout structure by composing the Header, NewsletterForm,
 * HeroBanner, and Footer components in a clean, vertically stacked, and centered layout.
 */
const IndexPage: React.FC = () => {
  return (
    <>
      {/* This inner container manages the spacing between the main page elements */}
      <div className="flex w-full flex-col items-center gap-16 px-4 md:gap-20 md:px-8">
        <NewsletterForm />
        <Stats />
        <HeroBanner />
      </div>
    </>
  );
};

export default IndexPage;