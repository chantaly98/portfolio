import React, { useEffect } from 'react';
import './style.css';

const NavBar = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    const handleClick = () => {
      console.log('Hamburger menu clicked'); // Add this line for debugging
      menu.classList.toggle('active');
    };

    hamburger.addEventListener('click', handleClick);

    return () => {
      hamburger.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav>
      <a href="#landing-section" className="logo">CHANTAL RAMOS</a>
      <div className="menu">
        <ul>
          <li className="nav-item">
            <a href="#projects" className="nav-link" id="nav1">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" id="nav2">ABOUT ME</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" id="nav3">CONTACT</a>
          </li>
          <li>
          <a href="Chantal_Ramos_Resume.pdf" className="nav-button" download="Chantal_Ramos_Resume.pdf">Resume</a>
          </li>
        </ul>
      </div>
      <div className="hamburger" id="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavBar;

