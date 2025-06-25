import React from 'react';
import { Asterisk } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroBannerProps {
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative w-full max-w-5xl mx-auto rounded-2xl p-8 md:p-12 flex flex-col justify-between overflow-hidden min-h-[350px] lg:min-h-[400px]',
        'bg-gradient-to-br from-[#1e1b4b] via-orange-950 to-primary text-primary-foreground',
        className
      )}
    >
      <div className="flex items-center space-x-2">
        <Asterisk className="h-6 w-6 text-primary-foreground" />
        <span className="text-xl font-bold text-primary-foreground">Pulse Robot</span>
      </div>
      
      <div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground/90">
          Made By AI & Human
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
