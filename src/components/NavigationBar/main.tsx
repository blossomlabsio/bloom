import { NavbarContainer, NavigationLink, NavItem, NavList } from './styled';
import Logo from '../Logo/main';
import { Button } from '../LoginPage/styled';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const NavigationBar = () => {
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { route: '/', text: 'Home' },
    { route: '/about', text: 'About' },
    { route: '/contact', text: 'Contact' },
  ];

  return (
    <NavbarContainer>
      <Logo src="https://i.ibb.co/2dBJqd6/4388667.png" alt="bloom-logo" />
      <NavList>
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
      </NavList>
    </NavbarContainer>
  );
};

export default NavigationBar;
