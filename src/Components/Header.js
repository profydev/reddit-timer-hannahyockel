import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/search/javascript">Search</Link>
      <Link to="/how-it-works">How it works</Link>
      <Link to="/about">About</Link>
    </header>
  );
}
