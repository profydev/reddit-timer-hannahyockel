import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../img/logo.svg';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/search/javascript">Search</Link>
      <HashLink to="/#how-it-works">How it works</HashLink>
      <HashLink to="/#about">About</HashLink>
    </header>
  );
}
