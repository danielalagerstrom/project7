import React from 'react';
import Navbar from './NavBar';

// Header component
function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Navbar />
    </header>
  );
}

export default Header;
