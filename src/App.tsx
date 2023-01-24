import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Cart from './components/cart';
import Productpage from './components/productpage';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Productpage />} />
    </Routes>
    </div>
  );
}

export default App;
