import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: #001d3d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  height: 3rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    height: 2.5rem;
  }

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-left: auto;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin: 0 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffc300;
    transform: scale(1.06);
  }
`;

export const NavigationLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin: 0 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffc300;
  }
`;

export const FloatingMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  background-color: #001d3d;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  list-style: none;

  ${NavItem} {
    margin-bottom: 10px;
  }
`;

export const Hamburger = styled.i`
  display: none !important;

  color: white;

  @media (max-width: 768px) {
    display: block !important;
  }
`;
