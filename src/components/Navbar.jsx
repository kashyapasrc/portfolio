import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { navLinks, personalInfo } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link to="hero" smooth duration={500} offset={-70} className="nav-logo" style={{ cursor: 'pointer' }}>
          {personalInfo.name.split(' ')[0]}
          <span className="accent">.</span>
        </Link>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              spy
              activeClass="active"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
