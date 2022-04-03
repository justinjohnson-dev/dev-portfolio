import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarWrapper,
  SideBarLink,
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to='about' onClick={toggle}>
            About
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
