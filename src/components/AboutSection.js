import React from 'react';
import './style.css';
import useFade from '../utils/useFade';

const AboutSection = () => {
  const [ref, isVisible] = useFade();

  return (
    <section id="about" className="about-page">
      <div className="about-container">
        <div className={`about-content fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="about-text">
            <h2 className="about-header">About Me</h2>
            <div class="container">
                <div class="img-box">
                <img 
                  src={process.env.PUBLIC_URL + '/images/Profile.JPG'} 
                  className="profile" 
                  alt="profile" 
                />
                </div>
              </div>
            <p>
              My name is Chantal, and I currently reside in Southern California. I started my transition in 2021 to become a software engineer, and I recently graduated from Oregon State University with a B.S. in Computer Science.
              My primary interest lies in full-stack development and that is what many of my projects have been focused on. My background in nutrition science has sharpened my analytical skills, attention to detail, and adaptability to diverse tasks.
              I am eager to apply my unique blend of skills to new experiences and challenges.
            </p>
          </div>
          <div className="subsections">
          <h3>Education</h3>
          <hr className='solid'></hr>
            <div className="flex-box">
              <ul>
                <li>B.S. in Nutrition Science, Bastyr University, 2019 </li>
                <li>B.S. in Computer Science, Oregon State University, 2023</li>
              </ul>
            </div>
            <h3>Soft Skills</h3>
            <hr className='solid'></hr>
            <div className="flex-box">
              <ul>
                <li>Analytical Skills</li>
                <li>Attention to Detail</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
            <h3>Personal Interests</h3>
            <hr className='solid'></hr>
            <div className="flex-box">
              <ul>
                <li>Taking My Dog for Scenic Walks</li>
                <li>Traveling</li>
                <li>Cooking and Baking</li>
                <li>Reading Books</li>
                <li>Spending Time with Family and Friends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
