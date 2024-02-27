import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Menu from './pages/Menu/index';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Nav/>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" exact element={<Home/>} />
              <Route path="/Menu" element={<Menu/>} />
              <Route path="/Reservations" element={<Reservations/>} />
              <Route path="/OrderOnline" element={<OrderOnline/>} />
              <Route path="/Login" element={<Login/>} />
            </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
