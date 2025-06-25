import React from 'react';
import { Asterisk } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#' as const },
  { name: 'About', href: '#' as const },
  { name: 'Contact', href: '#' as const },
];

interface HeaderProps {
  className?: string;
}

/**
 * Renders the header for the landing page, including the logo and navigation links.
 * @param {HeaderProps} props - The props for the component.
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'flex w-full items-center justify-between h-16',
        className
      )}
    >
      {/* Logo Section */}
      <a href="#" className="flex items-center gap-2">
        <Asterisk className="h-7 w-7 text-card-foreground" />
        <span className="text-xl font-bold text-card-foreground">Pulse Robot</span>
      </a>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-base font-medium text-card-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
