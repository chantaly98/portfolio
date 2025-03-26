import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faReact, faNodeJs, faPython, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import mongoDBIcon from '../icons/mongoDB.svg';
import vscodeIcon from '../icons/vscode.svg';
import npmIcon from '../icons/npm.svg';
import gitIcon from '../icons/git.svg';
import useFade from '../utils/useFade'; 

const techStack = [
  { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#F7DF1E' }} size="3x" />, name: 'JavaScript' },
  { icon: <FontAwesomeIcon icon={faHtml5} style={{ color: '#E34F26' }} size="3x" />, name: 'HTML' },
  { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#1572B6' }} size="3x" />, name: 'CSS' },
  { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61DAFB' }} size="3x" />, name: 'React' },
  { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} size="3x" />, name: 'Node.js' },
  { icon: <FontAwesomeIcon icon={faPython} style={{ color: '#3776AB' }} size="3x" />, name: 'Python' },
  { icon: <FontAwesomeIcon icon={faGithub} style={{ color: '#181717' }} size="3x" />, name: 'Github' },
  { icon: <img src={mongoDBIcon} alt="MongoDB" className="custom-icon" />, name: 'MongoDB' },
  { icon: <img src={vscodeIcon} alt="VSCode" className="custom-icon" />, name: 'VSCode' },
  { icon: <img src={npmIcon} alt="NPM" className="custom-icon" />, name: 'NPM' },
  { icon: <img src={gitIcon} alt="git" className="custom-icon" />, name: 'git' },
  { icon: <FontAwesomeIcon icon={faFigma} style={{ color: '#F24E1E' }} size="3x" />, name: 'Figma' },
];

const TechnicalStack = () => {
  const [ref, isVisible] = useFade();

  return (
    <div className="tech-container">  
      <div className={`about-text fade-in ${isVisible ? 'visible' : ''}`} ref={ref}> 
        <h2>My Technical Stack</h2>
        <div className="technical-stack">
          {techStack.map((tech, index) => (
            <div className="tech-item" key={index}>
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default TechnicalStack;
