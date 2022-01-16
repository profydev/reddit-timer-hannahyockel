/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from './style';
import Header from './Header';
// import Footer from './common/footer/Footer;';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/search">Search Page</Route>
        <Route path="/">Home Page</Route>
        <Route>404 - Not Found</Route>
      </Routes>
    </ThemeProvider>
  );
}

// export default App;
