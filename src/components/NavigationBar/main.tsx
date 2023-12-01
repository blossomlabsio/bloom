import {
  FloatingMenu,
  Hamburger,
  NavbarContainer,
  NavigationLink,
  NavItem,
  NavList,
} from './styled';
import Logo from '../Logo/main';
import { Button } from '../LoginPage/styled';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

interface Props {
  toggleMenu: () => void;
}

export const NavigationBar = () => {
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { route: '/', text: 'Home' },
    { route: '/about', text: 'About' },
    { route: '/contact', text: 'Contact' },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  };

  const HamburgerIcon: React.FC<Props> = ({ toggleMenu }) => {
    return <div onClick={toggleMenu}></div>;
  };

  return (
    <NavbarContainer>
      <Logo src="https://i.ibb.co/2dBJqd6/4388667.png" alt="bloom-logo" />

      <NavList>
        {navLinks.map((link, index) => (
          <NavItem key={index}>
            <NavigationLink to={link.route}>{link.text}</NavigationLink>
          </NavItem>
        ))}
        <span
          style={{ backgroundColor: 'white', width: '1px', height: '3rem' }}
        ></span>
        <NavItem>
          {isUserLoggedIn ? (
            <Button onClick={() => navigate('/')}>Logout</Button>
          ) : (
            <Button onClick={() => navigate('login')}> Login </Button>
          )}
        </NavItem>
      </NavList>

      <Hamburger
        onClick={toggleMenu}
        className={showMenu ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'}
      />

      {showMenu && (
        <FloatingMenu>
          {/* Add your expanded menu items here */}
          {navLinks.map((link, index) => (
            <NavItem key={index}>
              <NavigationLink to={link.route}>{link.text}</NavigationLink>
            </NavItem>
          ))}
          <NavItem>
            {isUserLoggedIn ? (
              <Button onClick={() => navigate('/')}>Logout</Button>
            ) : (
              <Button onClick={() => navigate('login')}> Login </Button>
            )}
          </NavItem>
        </FloatingMenu>
      )}
    </NavbarContainer>
  );
};

export default NavigationBar;
