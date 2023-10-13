import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you need
import {
  FooterWrapper,
  FooterContent,
  SocialMediaIconContainer,
  SocialMediaIcon,
  FooterLink,
  List,
  ListItem,
  AllRightsReserved,
  FooterHeader,
} from './styled';

const FooterLinkData = [
  {
    category: 'Features',
    links: { Creation: '#', Management: '#', Tracking: '#' },
  },
  {
    category: 'Support',
    links: { FAQ: '#', Feedback: '#', Contact: '#' },
  },
];

const SocialMediaLinks = [
  {
    name: faGithub,
    href: 'https://github.com/blossomlabsio',
  },
  {
    name: faTwitter,
    href: 'https://twitter.com',
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        {FooterLinkData.map((categoryData, index) => (
          <List key={index}>
            <FooterHeader>{categoryData.category}</FooterHeader>
            {Object.entries(categoryData.links).map(([name, href]) => (
              <ListItem key={name}>
                <FooterLink href={href}>{name}</FooterLink>
              </ListItem>
            ))}
          </List>
        ))}
      </FooterContent>
      <SocialMediaIconContainer>
        <AllRightsReserved>
          &copy; 2023 Bloom, All Rights Reserved.
        </AllRightsReserved>
        {SocialMediaLinks.map(({ name, href }) => (
          <SocialMediaIcon key={href} href={href}>
            <FontAwesomeIcon icon={name} />
          </SocialMediaIcon>
        ))}
      </SocialMediaIconContainer>
    </FooterWrapper>
  );
};

export default Footer;
