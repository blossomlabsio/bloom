import React, { useRef, useState } from 'react';
import {
  TabBtn,
  LoginButton,
  SignupButton,
  EmailInput,
  PasswordInput,
  LoginBtn,
  Forgot,
} from './LoginFormStyled';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
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
    <>
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
          <EmailInput type="text" placeholder="username" />
          <EmailInput type="text" placeholder="email" />
          <PasswordInput type="password" placeholder="password" />
          <LoginBtn>Sign Up</LoginBtn>
        </>
      )}
    </>
  );
};

export default LoginForm;
