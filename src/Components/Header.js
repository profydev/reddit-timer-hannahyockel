import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/search">Search</Link>
      <a href="#how-it-works">How it works</a>
      <a href="#about">About</a>
    </nav>
  );
}
