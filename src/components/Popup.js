import React from 'react';
import './style.css';

const Popup = ({ project }) => (
  <div id={`popup${project.id}`} className="popup">
    <div className="popup-content">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-container">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a className="btn" href={project.github} target="_blank" rel="noopener noreferrer">See code on Github</a>
      </div>
      <button id="close-btn" data-popup-id={`popup${project.id}`} className="close-btn">X</button>
    </div>
  </div>
);

export default Popup;
