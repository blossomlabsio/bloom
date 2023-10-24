import { Social } from './SocialStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faTwitter,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcon = () => {
  return (
    <Social>
      <a href="/">
        <FontAwesomeIcon icon={faGoogle} size="lg" />
      </a>
      <a href="https://twitter.com">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
      <a href="https://github.com/blossomlabsio">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </Social>
  );
};

export default SocialMediaIcon;
