import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <Link to="hero" smooth duration={600} offset={-70}>
          <button className="back-to-top" aria-label="Back to top">
            <FaArrowUp />
          </button>
        </Link>
      </div>
    </footer>
  );
}
