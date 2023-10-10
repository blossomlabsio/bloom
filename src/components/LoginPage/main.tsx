import { useState } from 'react';
import { Button, Input, LoginContainer } from './styled';
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const postHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError) {
      const body = {
        email,
        password,
      };

      client
        .post('login', body, { headers: postHeaders })
        .then((response) => {
          console.log('login', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <LoginContainer>
      <h2>Login Page</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={(e) => validateEmail(e.target.value)}
      />
      {emailError && <p>{emailError}</p>}
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={(e) => validatePassword(e.target.value)}
      />
      {passwordError && <p>{passwordError}</p>}
      <Button onClick={handleLogin}>Login</Button>
    </LoginContainer>
  );
};

export default LoginPage;
