import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import './global.css';

import Routes from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <Routes/>
   </BrowserRouter>
  );
}

export default App;
