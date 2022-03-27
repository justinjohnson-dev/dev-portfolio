import React from 'react';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src='/video.mp4' />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
