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
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
