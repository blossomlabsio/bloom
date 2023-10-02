import { FooterContainer } from './styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Blossomlabs. All rights reserved.</p>
    </FooterContainer>
  );
};
