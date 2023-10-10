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

  const body = {
    email,
    password,
  };

  const handleLogin = () => {
    client
      .post('login', body, { headers: postHeaders })
      .then((response) => {
        console.log('login', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <LoginContainer>
      <h2>Login Page</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </LoginContainer>
  );
};

export default LoginPage;
