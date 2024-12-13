import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="	https://www.rmlau.ac.in/images/logo_red_s.png" alt="Logo" className="logo" />
        <h1 className="title">Teacher Colony Verification</h1>
      </div>
      <nav>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/loginForm" className="nav-link">Login</Link>
        <Link to="/verify" className="nav-link">Verify</Link>
        <Link to="/logout" className="nav-link">Logout</Link>
      </nav>
    </header>
  );
}

export default Header;
