import { Link } from 'react-router-dom';
import React from 'react';

interface NavBarProps {
  className?: string;
  ariaLabel?: string;
  onLinkClick?: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  className = '',
  ariaLabel = 'Primary',
  onLinkClick,
}) => {
  return (
    <nav className={className} aria-label={ariaLabel}>
      <ul>
        <li>
          <Link to="/" onClick={onLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={onLinkClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
