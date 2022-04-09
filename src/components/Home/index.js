import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
import Experience from '../Experience';
import Footer from '../Footer';
import HeroSection from '../HeroSection/';
import NavBar from '../NavBar';
import Projects from '../Projects';
import SideBar from '../SideBar';
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [landingPage, setLandingPage] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const enterApplication = () => {
    setLandingPage(!landingPage);
    if (isOpen === true) setIsOpen(false);
  };

  return (
    <>
      {landingPage === false ? (
        <HeroSection enterApplication={enterApplication} />
      ) : (
        <>
          <NavBar toggle={toggle} />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
      <SideBar
        isOpen={isOpen}
        toggle={toggle}
        enterApplication={enterApplication}
      />
    </>
  );
};

export default HomePage;
