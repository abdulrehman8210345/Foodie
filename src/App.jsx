// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DishList from './components/DishList';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Bill from './pages/Bill';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<DishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/split-bill" element={<Bill />} />
          <Route path="/login" element={<Home/>} />
          <Route path="/register" element={<Home/>} />
          
        </Routes>
      </div>
      
      <Footer/>
    </Router>
  );
};

export default App;
