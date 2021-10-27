import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  MainLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <MainLink>
          ToolsFinder </MainLink>
            </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/login' activeStyle>
            About me
          </NavLink>
          <NavLink to='/portfolio' activeStyle>
            Portfolio
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact 
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
         </NavMenu>
          
      </Nav>
    </>
  );
};

export default Navbar;
