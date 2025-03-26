import React from 'react';
import './style.css';

const ProjectBox = ({ project }) => (
  <div id={`box${project.id}`} className="box">
    <img src={project.image} alt={project.title} />
    <h1>{project.title}</h1>
    <hr className='solid'></hr>
    <p><strong>Skills used:</strong> {project.skills}</p>
  </div>
);

export default ProjectBox;
