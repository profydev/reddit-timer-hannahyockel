import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
// import styled from "styled-components";
// import { Link as UnstyledLink } from "react-router-dom";
// import { ReactComponent as UnstyledLogo } from "./logo.svg";

// const Container = styled.header`
//   width: 100%;
// `;

// const Logo = styled(UnstyledLogo)`
//   margin-top: 0.5rem;
// `;

// const Link = styled(UnstyledLink)`
//   margin-left: 1.5rem;
// `;

// renders a couple of links in a nav element plus the logo as an additional link

export default function Header() {
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
