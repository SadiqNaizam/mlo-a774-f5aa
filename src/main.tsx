import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import { ThemeProvider } from './components/theme-provider';
import DashboardPage from './pages/dashboard';
import HomePage from './pages/home'; // Import the new Home Page

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />, // Set HomePage as the index route
      },
      {
        path: 'dashboard',
        element: <DashboardPage />, // Add a route for the Dashboard
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);