import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection/';
import InfoSection from '../components/InfoSection/';
import { HomeObjOne } from '../components/InfoSection/Data';
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

  console.log(landingPage);
  return (
    <>
      {landingPage === false ? (
        <HeroSection enterApplication={enterApplication} />
      ) : (
        <>
          <NavBar toggle={toggle} />
          <InfoSection {...HomeObjOne} />
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
