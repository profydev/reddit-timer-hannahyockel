import React from 'react';
import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo.svg';

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled(UnstyledLogo)`
  margin-top: 8px;
`;

const Link = styled(UnstyledLink)`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;

// renders a couple of links in a nav element plus the logo as an additional link

export default function Header() {
  return (
    <header>
      <Container>
        <Link to="/">
          <Logo>
            <img src={UnstyledLogo} alt="Logo" />
          </Logo>
        </Link>
        <nav>
          <Link to="/search/javascript">Search</Link>
          <Link to="/#how-it-works">How it works</Link>
          <Link to="/#about">About</Link>
        </nav>
      </Container>
    </header>
  );
}
