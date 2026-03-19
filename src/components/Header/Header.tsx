import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { NavBar } from '../NavBar/NavBar';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (open && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="/">
          Garion Morgan
        </a>

        <NavBar
          className="main-nav"
          ariaLabel="Primary"
          onLinkClick={() => setOpen(false)}
        />

        <div className="header-actions">
          <a className="cta" href="/resume">
            Download Resume
          </a>

          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`hamburger ${open ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <NavBar
          className="mobile-nav"
          ariaLabel="Mobile"
          onLinkClick={() => setOpen(false)}
        />
      </div>
    </header>
  );
};
