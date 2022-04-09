import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarWrapper,
  SideBarLink,
} from './SideBarElements';

const SideBar = ({ isOpen, toggle, enterApplication }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarLink to='landing' onClick={enterApplication}>
          Landing
        </SideBarLink>
        <SideBarLink to='about' onClick={toggle}>
          About
        </SideBarLink>
        <SideBarLink to='projects' onClick={toggle}>
          Projects
        </SideBarLink>
        <SideBarLink to='experience' onClick={toggle}>
          Experience
        </SideBarLink>
        <SideBarLink to='contact' onClick={toggle}>
          Contact
        </SideBarLink>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
