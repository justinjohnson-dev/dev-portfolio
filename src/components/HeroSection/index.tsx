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

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src='/video.mp4' />
      </HeroBg>
      {/* <HeroContent>
        <HeroH1>@ Justin Johnson</HeroH1>
        <HeroP>Software Engineer | Data Engineer | Computer Enthusiast</HeroP>
        <HeroBtnWrapper>
          <Button
            to=''
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Dive in {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent> */}
    </HeroContainer>
  );
};

export default HeroSection;
