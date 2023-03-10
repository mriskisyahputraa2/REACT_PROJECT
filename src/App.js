import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App;
