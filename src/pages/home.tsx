import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/';
import InfoSection from '../components/InfoSection/';
import { HomeObjOne } from '../components/InfoSection/Data';
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
      <InfoSection {...HomeObjOne} />
    </>
  );
};

export default HomePage;
