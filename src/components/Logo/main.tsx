import { LogoWrapper, StyledLogo } from './styled';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo = ({ src, alt }: LogoProps) => {
  return (
    <LogoWrapper>
      <StyledLogo src={src} alt={alt} />
    </LogoWrapper>
  );
};

export default Logo;
