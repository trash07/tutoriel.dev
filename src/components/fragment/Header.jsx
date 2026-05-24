import * as React from 'react';
import { Link } from 'gatsby';
import { getSiteUrl } from '../utils/url-generator';

export default function Header() {
  return (
    <nav>
      <div className="nav-inner">
        <a className="logo" href={getSiteUrl()}>
          tutoriel<span>.dev</span>
        </a>
        <div className="nav-links">
          <Link to="/tutorials">Tutorials</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/about">About</Link>
        </div>
        <button className="hamburger" id="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="mobile-menu" id="mobile-menu">
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
