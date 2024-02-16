import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div id="root">
    <Header />
    <Nav />
    <Main />
    <Footer />
    </div>
  );
}

export default App;
