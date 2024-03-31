
import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';



function App() {

  return (
    <div className="App">
      <header className="Background justi">
        <div className="empty"/>
        <Navbar/>
        <div className="empty2"/>
        <Home/>
        <About/>
      </header>
    
    </div>
  );
}

export default App;
