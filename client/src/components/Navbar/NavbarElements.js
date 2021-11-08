import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #0a090ad6;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size:20px;

  &:hover {
    color: gray;
    transition: 200ms ease-in;
  }

  &.active {
    color: gray;
  }
`;


export const MainLink = styled.p`
  
  font-size:30px;
  color:white;

  &:hover {
    color: gray;
    transition: 200ms ease-in;
  }

  &.active {
    color: green;
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;


  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundLogin=styled.div`

  background: #ffffff;


`

