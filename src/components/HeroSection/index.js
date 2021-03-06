import React, { useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements';

import { Button } from '../ButtonElement';
import { CloudinaryContext, Video } from 'cloudinary-react';

const HeroSection = ({ enterApplication }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='landing'>
      <HeroBg>
        <CloudinaryContext cloudName='dpts316gg'>
          <Video
            publicId='video_uxhr0a'
            autoPlay
            muted
            className='cld-video-player cld-fluid'
          ></Video>
        </CloudinaryContext>
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
