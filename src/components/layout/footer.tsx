import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

/**
 * Renders the footer for the landing page, containing attribution text.
 * @param {FooterProps} props - The props for the component.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'w-full h-20 flex items-center justify-center',
        className
      )}
    >
      <p className="text-center text-sm text-muted-foreground px-4">
        &copy; {currentYear} Pulse Robot. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;