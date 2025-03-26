// src/App.js
import React, { useEffect } from 'react';
import NavBar from './components/Navbar';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import TechnicalStack from './components/TechnicalStack';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { handleScrollNavigation, handleLinkNavigation } from './utils/navigation';
import { setupPopupListeners } from './utils/popup';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  useEffect(() => {
    // Set up popup listeners
    setupPopupListeners();

    // Set up scroll navigation
    const handleScroll = () => {
      handleScrollNavigation();
    };

    window.addEventListener('scroll', handleScroll);

    // Set up click navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', handleLinkNavigation);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <LandingSection />
      <ProjectsSection />
      <TechnicalStack />      
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
