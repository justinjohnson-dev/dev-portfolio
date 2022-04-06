import React, { useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements';

import { Button } from '../ButtonElement';

const HeroSection = ({ enterApplication }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='landing'>
      <HeroBg>
        <VideoBg autoPlay loop muted src='/video.mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>@ Justin Johnson</HeroH1>
        <HeroP>Software Engineer | Data Engineer | Computer Enthusiast</HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            onClick={enterApplication}
          >
            Learn more! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
