
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import DefRoutes from './main/DefRoutes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Wtpp_logo from './components/Wtpp_logo';

function App() {
  const [selected, setSelected] = useState<Boolean>()
  return (
    <BrowserRouter>
      <div className="App">
        <DefRoutes></DefRoutes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
