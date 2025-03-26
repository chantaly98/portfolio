import React from 'react';
import ProjectBox from './ProjectBox';
import Popup from './Popup';
import './style.css';
import useFade from '../utils/useFade'; 

const projects = [
  {
    id: 1,
    image: '/images/Translator.png',
    title: 'Translator',
    video: './videos/TranslatorDemo.mp4',
    description: 'A web application that utilizes an API to translate words or sentences. Explore the various features, including getting a word count, random word generator, bookmarking... etc',
    skills: 'HTML, JavaScript, Python, CSS, Node.js, Express',
    github: 'https://github.com/chantaly98/CS361-Project-Translator'
  },
  {
    id: 2,
    image: '/images/Skills page.png',
    title: 'JobTrekker',
    video: '/videos/SkillsDemo.mp4',
    description: 'A job tracking web application tailored for graduating students who will be applying to numerous internships and job positions. A tool designed to help new grads meticulously organize and monitor applications.',
    skills: 'JavaScript, Python, CSS, HTML, Docker, Flask, React, MongoDB',
    github: 'https://github.com/efeaton86/CS467-JobTracker'
  },
  {
    id: 3,
    image: '/images/ExerciseTracker.png',
    title: 'Exercise Tracker',
    video: '/videos/ExerciseDemo.mp4',
    description: 'A website that tracks exercise/workout entries into one convenient table. Add, Edit, or Delete any entry to keep an organized exercise log.',
    skills: 'JavaScript, CSS, HTML, React, MongoDB',
    github: 'https://github.com/chantaly98/Exercise_Tracker'
  }
];

const ProjectsSection = () => {
  const [ref, isVisible] = useFade();

  return (
    <section id="projects" className="project-page">
      <div id="project-page" className="projects">
        <div className={`projects-text fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div>
            <h2 id='project-title'>Project Gallery</h2>
          </div>
          <div className="long-bar">
            {projects.map((project, index) => (
              <ProjectBox key={project.id} project={project} />
            ))}
          </div>
          {projects.map((project, index) => (
            <Popup key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
