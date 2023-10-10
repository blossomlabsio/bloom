import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/main';
import LoginPage from './components/LoginPage/main';
import LandingPageBody from './components/LandingPageBody/main';
import UserProfile from './components/UserProfile/main';
import AboutPage from './components/AboutPage/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '/',
        element: <LandingPageBody />,
      },
      {
        path: 'userprofile',
        element: <UserProfile />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
