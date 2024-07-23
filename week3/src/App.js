import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductPage />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
