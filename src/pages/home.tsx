import React from 'react';

// Import reusable components
import HeroBanner from '@/components/herobanner/herobanner';
import Stats from '@/components/stats/stats';
import NewsletterForm from '@/components/newsletter/newsletterform';

const HomePage: React.FC = () => {
  return (
    <div className="flex-1 space-y-16 md:space-y-24 flex flex-col items-center">
      <HeroBanner />
      <Stats />
      <NewsletterForm />
    </div>
  );
};

export default HomePage;