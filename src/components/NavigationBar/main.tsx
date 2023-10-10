import { NavbarContainer, NavigationLink, NavItem, NavList } from './styled';
import Logo from '../Logo/main';

export const NavigationBar = () => {
  const navLinks = [
    { route: '/', text: 'Home' },
    { route: '/about', text: 'About' },
    { route: '/contact', text: 'Contact' },
    { route: '/login', text: 'Login' },
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
      </NavList>
    </NavbarContainer>
  );
};

export default NavigationBar;
