import React from 'react';

import { GlobalStyles, MainBody } from './styled';

import Right from './Right';
// import LeftSide from './LeftSide';

const LoginPage: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <MainBody>
        {/* <LeftSide /> */}
        <Right />
      </MainBody>
    </div>
  );
};

export default LoginPage;
