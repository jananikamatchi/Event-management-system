import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <img
        src="/image/user-logo.png"  // Make sure this image exists in the public/images folder or adjust the path
        alt="User Logo"
        className="logo"
      />
      <h2 className="title">EventEase – User</h2>
      <nav>
        <a href="#login">Login</a>
        <a href="#register">Sign/Register</a>
      </nav>
    </header>
  );
};

export default Header;