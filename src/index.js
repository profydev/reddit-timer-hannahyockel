import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './Components/Navbar';
import './index.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
