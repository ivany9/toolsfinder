import React from "react";
import { Nav, NavLink, Bars, NavMenu, MainLink } from "./NavbarElements";
import Button from "react-bootstrap/Button";
import Auth from "../../utils/auth";
import Select from "../../components/picker/index";
import Autocomplete from "../autocomplete";
import { useLocation } from "react-router-dom";

const Navbar = ({ setFormState, formState }) => {
  const location = useLocation();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  console.log(location.pathname, "props");

  return (
    <>
      <Nav>
        <NavLink to="/" onClick={() => setFormState({ category: "" })}>
          <MainLink>ToolsFinder </MainLink>
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <Autocomplete /> */}
          {location.pathname === "/" ? (
            <Select formState={formState} setFormState={setFormState} />
          ) : null}
          {/* <Select/> */}
          {Auth.loggedIn() ? (
            <>
              <NavLink to="/me">My profile</NavLink>

              <Button className="btn btn- btn-light m-1" onClick={logout}>
                logout
              </Button>
            </>
          ) : (
            <>
              <NavLink  to="/login">
                Log in
              </NavLink>
              <NavLink to="/signup" >
                Sign up
              </NavLink>
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
