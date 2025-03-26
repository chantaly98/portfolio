// utils/navigation.js

export function handleNavigation() {
    // Get the current URL
    const currentUrl = window.location.href;
  
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Loop through each navigation link
    navLinks.forEach((navLink) => {
      // Check if the href attribute matches the current URL
      if (navLink.href === currentUrl) {
        // Add 'active' class to the matching navigation link
        navLink.classList.add('active');
      } else {
        // Remove 'active' class from other navigation links
        navLink.classList.remove('active');
      }
    });
  }
  
  export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  export function handleLinkNavigation(event) {
    // Prevent default link behavior
    event.preventDefault();
  
    // Get the href attribute of the clicked link
    const targetSectionId = event.target.getAttribute('href').substring(1);
  
    // Get the corresponding section element
    const targetSection = document.getElementById(targetSectionId);
  
    // Check if the target section exists
    if (targetSection) {
      // Scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
  
      // Update navigation highlighting
      handleNavigation();
  
      // Update the URL with the ID of the target section
      window.history.pushState(null, null, `#${targetSectionId}`);
    } else {
      console.error(`No section found with ID: ${targetSectionId}`);
    }
  }
  
  export function handleScrollNavigation() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
  
    // Get all section elements
    const sections = document.querySelectorAll('section');
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Loop through each section
    sections.forEach((section) => {
      // Check if the section is in the viewport
      if (
        section.offsetTop <= scrollPosition + 100 &&
        section.offsetTop + section.offsetHeight > scrollPosition + 100
      ) {
        // Get the ID of the section
        const sectionId = section.getAttribute('id');
  
        // Get the corresponding navigation link
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
  
        // Remove 'active' class from all navigation links
        navLinks.forEach((link) => {
          link.classList.remove('active');
        });
  
        // Add 'active' class to the navigation link corresponding to the current section
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  
    // Highlight contact page when it comes into view
    const contactSection = document.getElementById('contact');
    const contactNavLink = document.querySelector('.nav-link[href="#contact"]');
    if (contactSection && isInViewport(contactSection)) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      if (contactNavLink) {
        contactNavLink.classList.add('active');
      }
    }
  }
  