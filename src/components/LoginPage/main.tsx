import { useRef } from 'react';
// import { Button, Input, LoginContainer } from './styled';
import { useAuth } from '../../contexts/AuthContext';
// import Footer from '../footer/main';

import React, { useState } from 'react';
import blossomImage from '/home/vishesh/Desktop/Work/bloom/src/assets/4388667 1.png';
import {
  GlobalStyles,
  MainBody,
  Left,
  H1,
  Right,
  Figure,
  Image,
  Figcaption,
  DirectLogin,
  LoginBtns,
  GoogleButton,
  FacebookButton,
  GoogleSvg,
  FacebookSvg,
  TabBtn,
  LoginButton,
  SignupButton,
  EmailInput,
  PasswordInput,
  LoginBtn,
  Forgot,
} from './styled';

const LoginPage: React.FC = () => {
  const [isLoginView, setLoginView] = useState(true);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { handleLogin, emailError, passwordError } = useAuth();

  const login = async () => {
    const username = usernameRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    handleLogin(username, password);
  };

  return (
    <div>
      <GlobalStyles />
      <MainBody>
        <Left>
          <H1>Blossom Labs</H1>
        </Left>
        <Right>
          <Figure>
            <Image src={blossomImage} alt="blossom" />
            <Figcaption>Blossom Labs</Figcaption>
          </Figure>
          <DirectLogin>Express login via Google and Facebook</DirectLogin>
          <LoginBtns>
            <GoogleButton>
              <p>Google</p>
              <GoogleSvg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M1.064 5.51C1.89601 3.85324 3.17237 2.46051 4.75043 1.48747C6.32849 0.514427 8.14606 0.000583569 10 4.96231e-07C12.695 4.96231e-07 14.959 0.991001 16.69 2.605L13.823 5.473C12.786 4.482 11.468 3.977 10 3.977C7.395 3.977 5.19 5.737 4.405 8.1C4.205 8.7 4.091 9.34 4.091 10C4.091 10.66 4.205 11.3 4.405 11.9C5.191 14.264 7.395 16.023 10 16.023C11.345 16.023 12.49 15.668 13.386 15.068C13.9054 14.726 14.3501 14.2822 14.6932 13.7635C15.0363 13.2448 15.2706 12.6619 15.382 12.05H10V8.182H19.418C19.536 8.836 19.6 9.518 19.6 10.227C19.6 13.273 18.51 15.837 16.618 17.577C14.964 19.105 12.7 20 10 20C8.68663 20.0005 7.38604 19.7422 6.17254 19.2399C4.95905 18.7375 3.85645 18.0009 2.92776 17.0722C1.99907 16.1436 1.2625 15.041 0.760135 13.8275C0.257774 12.614 -0.000524861 11.3134 8.00714e-07 10C8.00714e-07 8.386 0.386001 6.86 1.064 5.51Z"
                  fill="#C4C4C4"
                />
              </GoogleSvg>
            </GoogleButton>
            <FacebookButton>
              <p>Facebook</p>
              <FacebookSvg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="25"
                viewBox="0 0 14 25"
                fill="none"
              >
                <path
                  d="M9.4375 14.375H12.5625L13.8125 9.375H9.4375V6.875C9.4375 5.5875 9.4375 4.375 11.9375 4.375H13.8125V0.175C13.405 0.12125 11.8662 0 10.2412 0C6.8475 0 4.4375 2.07125 4.4375 5.875V9.375H0.6875V14.375H4.4375V25H9.4375V14.375Z"
                  fill="#C4C4C4"
                />
              </FacebookSvg>
            </FacebookButton>
          </LoginBtns>
          <hr />
          <TabBtn>
            <LoginButton
              className={isLoginView ? '' : 'active'}
              onClick={() => {
                setLoginView(true);
              }}
            >
              Log In
            </LoginButton>
            <SignupButton
              className={isLoginView ? '' : 'active'}
              onClick={() => {
                setLoginView(false);
              }}
            >
              Sign up
            </SignupButton>
          </TabBtn>

          {isLoginView ? (
            <>
              <EmailInput
                type="text"
                placeholder="email or username"
                ref={usernameRef}
              />
              {emailError && <p>{emailError}</p>}
              <PasswordInput
                type="password"
                placeholder="password"
                ref={passwordRef}
              />
              {passwordError && <p>{passwordError}</p>}
              <LoginBtn onClick={login} type="submit">
                Log in
              </LoginBtn>
              <Forgot>Forgot password?</Forgot>
            </>
          ) : (
            <>
              <EmailInput type="text" placeholder="email" />
              <EmailInput type="text" placeholder="username" />
              <PasswordInput type="password" placeholder="password" />
              <LoginBtn>Sign Up</LoginBtn>
            </>
          )}
          <hr />
        </Right>
      </MainBody>
    </div>
  );
};

export default LoginPage;
