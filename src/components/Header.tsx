import { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const syncNavHeight = useCallback(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty('--nav-h', headerRef.current.offsetHeight + 'px');
    }
  }, []);

  useEffect(() => {
    syncNavHeight();
    window.addEventListener('resize', syncNavHeight);
    if (document.fonts?.ready) {
      document.fonts.ready.then(syncNavHeight);
    }
    return () => window.removeEventListener('resize', syncNavHeight);
  }, [syncNavHeight]);

  const handleNav = (view: string) => {
    onNavigate(view);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const links = [
    { view: 'home', label: 'Home' },
    { view: 'belajar', label: 'Modul Belajar' },
    { view: 'faq', label: 'Contact Us' },
    { view: 'game', label: 'Game' },
  ];

  return (
    <header className="nav" ref={headerRef}>
      <div className="nav-inner">
        <div className="logo" onClick={() => handleNav('home')}>
          <a href="#">
            <img
              src="https://i.ibb.co.com/qYHvGp9f/Vocabee-Proto-1.png"
              alt="Vocabee Logo"
              style={{ width: 32, height: 32 }}
            />
          </a>
          VOCABEE
        </div>

        <nav className={`links${menuOpen ? ' open' : ''}`} id="navLinks">
          {links.map((link) => (
            <a
              key={link.view}
              href="#"
              className={currentView === link.view ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.view);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-controls">
          <button
            className="theme-switch"
            type="button"
            aria-pressed={theme === 'light'}
            onClick={toggleTheme}
          >
            <span className="dot" aria-hidden="true" />
            {theme === 'light' ? 'MODE TERANG' : 'MODE GELAP'}
          </button>
          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            MENU
          </button>
        </div>
      </div>
    </header>
  );
}
