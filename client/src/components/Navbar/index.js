import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  MainLink,
} from './NavbarElements';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';

const Navbar = () => {
const logout=(event)=>{
  event.preventDefault();
  Auth.logout();

};

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <MainLink>
          ToolsFinder </MainLink>
            </NavLink>
        <Bars />
        <NavMenu> 
        {Auth.loggedIn()?(
          <>  
          <NavLink to='/me'>
          My pofile
          </NavLink>
          <NavLink to='/' activeStyle>
            AddTool 
          </NavLink>
        <Button className="btn btn-lg btn-light m-1" onClick={logout}>logout</Button>
        </> 
             ):(
          <>
          <NavLink className="btn btn-lg btn-primary m-2" to="/login">
           Login
          </NavLink>
          <NavLink className="btn btn-lg btn-light m-2" to="/signup">
            Signup
          </NavLink>
          </>
           )}
         
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
         </NavMenu>
          
      </Nav>
    </>
  );
};

export default Navbar;
