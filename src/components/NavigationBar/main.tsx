import { NavbarContainer, NavigationLink } from './styled';

export const NavigationBar = () => {
  const navLinks = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'Login' },
    { href: '#', text: 'About' },
    { href: '#', text: 'Contact' },
  ];
  return (
    <NavbarContainer>
      {navLinks.map((link, index) => (
        <NavigationLink key={index} href={link.href}>
          {link.text}
        </NavigationLink>
      ))}
    </NavbarContainer>
  );
};

export default NavigationBar;
