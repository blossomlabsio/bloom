import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #001d3d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0 0.5rem 5rem;
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
`;
export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavigationLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin: 0 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffc300;
  }
`;
