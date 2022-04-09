import React, { useState } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection/';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
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
