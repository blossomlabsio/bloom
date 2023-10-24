import React from 'react';
import Logo from '../Logo/main';

import {
  Title,
  TitleFigure,
  TitleFigcaption,
  TitleP,
} from './DescriptionStyled';

const Description = () => {
  return (
    <Title>
      <TitleFigure>
        <Logo src="https://i.ibb.co/2dBJqd6/4388667.png" alt="bloom-logo" />
        <TitleFigcaption>Blossom Labs</TitleFigcaption>
      </TitleFigure>
      <TitleP className="copyright">
        &copy; 2023 Blossom Labs. All rights reserved
      </TitleP>
      <TitleP className="copyright-description">
        All trademarks, logos, and brand names are the property of their
        respective owners.
      </TitleP>
    </Title>
  );
};

export default Description;
