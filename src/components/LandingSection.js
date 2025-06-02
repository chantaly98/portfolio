import React from 'react';
import './style.css';

const LandingSection = () => (
  <section id="landing-section" className="landing-page">
    <div className="opening-picture">
    <img 
      src={process.env.PUBLIC_URL + '/images/laptop_vase.jpg'} 
      className="computer" 
      alt="computer" 
    />
    </div>
    <div className="intro">
      <p>Hello, I'm <span className="bold-intro">Chantal Ramos</span>,</p>
      <p>and I'm a <span className="bold-intro">Full Stack Developer</span>.</p>
      <a className="btn" href="#projects">Get to Know Me</a>
    </div>
  </section>
);

export default LandingSection;