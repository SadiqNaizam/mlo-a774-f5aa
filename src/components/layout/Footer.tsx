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
  return (
    <footer
      className={cn(
        'w-full h-20 flex items-center justify-center',
        className
      )}
    >
      <p className="text-center text-sm text-muted-foreground px-4">
        This template takes inspiration from{' '}
        <a
          href="https://www.designjoy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          DesignJoy's
        </a>{' '}
        BUILD WARS design, built entirely with Lovable by{' '}
        <a
          href="https://twitter.com/rezaularif"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Rezaul Arif
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
