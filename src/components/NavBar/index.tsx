import React from 'react';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavBarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo href='/'>Justin-Johnson-Dev</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>about</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
