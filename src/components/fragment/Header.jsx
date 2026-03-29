import * as React from 'react';

export default function Header() {
  return (
    <nav>
      <div className="nav-inner">
        <a className="logo" href="#">
          tutoriel<span>.dev</span>
        </a>
        <div className="nav-links">
          <a href="#">Tutorials</a>
          <a href="#">Topics</a>
          <a href="#">About</a>
        </div>
        <button className="hamburger" id="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="mobile-menu" id="mobile-menu">
        <a href="#">Tutorials</a>
        <a href="#">Topics</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}
