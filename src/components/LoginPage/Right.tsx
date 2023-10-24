import React from 'react';
import { Right as RightContainer } from './RightStyled';
// import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';
// import RightHeading from './RightHeading';

const Right = () => {
  return (
    <RightContainer>
      {/* <RightHeading /> */}
      {/* <SocialLogin/>  */}{' '}
      {/*Uncomment this to see login with google/ facebook*/}
      <LoginForm />
    </RightContainer>
  );
};

export default Right;
