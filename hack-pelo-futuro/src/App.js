import React from 'react';
import Routes from './routes/index'
import { BrowserRouter } from 'react-router-dom'

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes/>
   </BrowserRouter>
  );
}

export default App;
