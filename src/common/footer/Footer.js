import React from 'react';
import { Link } from 'react-router-dom';
import sign from './sign.svg';

export default function Footer() {
  return (
    <footer>
      <a href="https://profy.dev/employers">profy.dev</a>
      <a href="/">
        <img src={sign} alt="Sign" />
      </a>
      <Link to="/terms">Terms & Privacy</Link>
    </footer>
  );
}
