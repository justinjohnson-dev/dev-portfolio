import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/index';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default HomePage;
