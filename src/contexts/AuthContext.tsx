import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AuthState {
  isUserLoggedIn: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  emailError: string;
  passwordError: string;
  setEmailError: (error: string) => void;
  setPasswordError: (error: string) => void;
}

const initialState: AuthState = {
  isUserLoggedIn: false,
  handleLogin: (username: string, password: string) => {},
  handleLogout: () => {},
  emailError: '',
  passwordError: '',
  setEmailError: (error: string) => {},
  setPasswordError: (error: string) => {},
};

export const AuthContext = createContext(initialState);

export function useAuth() {
  return useContext(AuthContext);
}

const client = axios.create({
  baseURL: process.env.REACT_APP_ENTER_BACKEND_IP,
});

const postHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
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

  const handleLogin = async (username: string, password: string) => {
    validateEmail(username || '');
    validatePassword(password || '');

    if (!emailError || !passwordError) {
      const body = {
        username,
        password,
      };

      await client
        .post('login', body, { headers: postHeaders })
        .then((response) => {
          setIsUserLoggedIn(true);
          navigate('/userprofile');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleLogout = async () => {
    if (isUserLoggedIn) {
      setIsUserLoggedIn(false);
      navigate('/');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        handleLogin,
        handleLogout,
        emailError,
        passwordError,
        setEmailError,
        setPasswordError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
