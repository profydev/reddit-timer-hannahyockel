import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import InfoSection from './Components/InfoSection';
import './index.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Hero />
    <InfoSection />
    <Routes>
      <Route path="/" component={<App />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root'),
);
