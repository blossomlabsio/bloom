import { NavbarContainer, NavigationLink, NavItem, NavList } from './styled';
import Logo from '../Logo/main';

export const NavigationBar = () => {
  const navLinks = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'Login' },
    { href: '#', text: 'About' },
    { href: '#', text: 'Contact' },
  ];
  return (
    <NavbarContainer>
      <Logo src="https://i.ibb.co/2dBJqd6/4388667.png" alt="bloom-logo" />
      <NavList>
        {navLinks.map((link, index) => (
          <NavItem key={index}>
            <NavigationLink key={index} href={link.href}>
              {link.text}
            </NavigationLink>
          </NavItem>
        ))}
      </NavList>
    </NavbarContainer>
  );
};

export default NavigationBar;
