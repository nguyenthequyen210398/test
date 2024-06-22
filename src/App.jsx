import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LogIn from './pages/auth/LogIn';
import ResetPassword from './pages/auth/ResetPassword';
import ChangePassword from './pages/auth/ChangePassword';
import ErrorPage from './pages/ErrorPage';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import HomePage from './pages/main/HomePage';

function App() {


  return (
    <>
      {/* <ErrorPage /> */}
      {/* <Footer /> */}
      {/* <Header /> */}
      <HomePage />

    </>
  );
}

export default App;
