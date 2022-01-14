import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../img/logo.svg';

export const Container = styled.header`
  max-width: 1440px;
  padding: 0 80px;
  width: 100%;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6em;
  img {
    display: block;
  }
`;

const ListItem = styled.li`
  text-decoration: none;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  font-family: "Montserrat", sans-serif;
  display: flex;
  gap: 1.6em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => (
  <Container>
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <NavLinks>
        <ListItem>
          <StyledLink to="/searchpage/javascript">Search</StyledLink>
        </ListItem>
        <ListItem>
          <HashLink to="/#how-it-works">How it works</HashLink>
        </ListItem>
        <ListItem>
          <HashLink to="/#about">About</HashLink>
        </ListItem>
      </NavLinks>
    </Nav>
  </Container>
);

export default Header;
