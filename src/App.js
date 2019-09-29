import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
