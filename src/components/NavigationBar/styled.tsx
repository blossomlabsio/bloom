import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  height: 3rem;

  @media (max-width: 768px) {
    height: 2.5rem;
  }
`;

export const NavigationLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin: 0 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #00bcd4;
  }
`;
