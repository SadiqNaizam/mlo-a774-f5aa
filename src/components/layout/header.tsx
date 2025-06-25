import React from 'react';
import { Asterisk } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
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
      <Link to="/" className="flex items-center gap-2">
        <Asterisk className="h-7 w-7 text-foreground" />
        <span className="text-xl font-bold text-foreground">Pulse Robot</span>
      </Link>

      {/* Navigation Links & Theme Toggle */}
      <div className="flex items-center gap-6">
        <nav>
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'text-base font-medium text-foreground transition-colors hover:text-primary',
                      isActive && 'text-primary'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;