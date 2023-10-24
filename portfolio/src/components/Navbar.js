import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#about">
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            <span>About Me</span>
          </a>
          <a className="navbar-item" href="#work">
            <span className="icon">
              <i className="fas fa-briefcase"></i>
            </span>
            <span>Work</span>
          </a>
          <a className="navbar-item" href="#contact">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;