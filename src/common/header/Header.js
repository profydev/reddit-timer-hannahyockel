import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

// renders a couple of links in a nav element plus the logo as an additional link

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
        <Link to="/search/javascript">Search</Link>
        <a href="/#how-it-works">How it works</a>
        <a href="/#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
