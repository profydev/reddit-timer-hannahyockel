/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo.svg';

export const Container = styled.header`
  width: 100%;
`;

export const Logo = styled(UnstyledLogo)`
  margin-top: 0.5rem;
`;

export const Link = styled(UnstyledLink)`
  margin-left: 1.5rem;
`;
