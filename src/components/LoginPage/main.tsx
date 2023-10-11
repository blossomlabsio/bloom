import { useRef } from 'react';
import { Button, Input, LoginContainer } from './styled';
import { useAuth } from '../../contexts/AuthContext';

export const LoginPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { handleLogin, emailError, passwordError } = useAuth();

  const login = async () => {
    const username = usernameRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    handleLogin(username, password);
  };

  return (
    <LoginContainer>
      <h2>Login Page</h2>
      <Input type="email" placeholder="Email" ref={usernameRef} />
      {emailError && <p>{emailError}</p>}
      <Input type="password" placeholder="Password" ref={passwordRef} />
      {passwordError && <p>{passwordError}</p>}
      <Button onClick={login} type="submit">
        Login
      </Button>
    </LoginContainer>
  );
};

export default LoginPage;
