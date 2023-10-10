import { useState } from 'react';
import { Button, Input, LoginContainer } from './styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const client = axios.create({
  baseURL: process.env.REACT_APP_ENTER_BACKEND_IP,
});

const postHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

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
    validateEmail(username);
    validatePassword(password);

    if (!emailError && !passwordError) {
      const body = {
        username,
        password,
      };

      client
        .post('login', body, { headers: postHeaders })
        .then((response) => {
          console.log('login', response.data);
          navigate('/userprofile');
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
