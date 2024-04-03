
import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import { useDarkMode } from "./DarkModeContext";



function App() {
  const { darkMode } = useDarkMode();
    const { toggleDarkMode } = useDarkMode();

  return (
    <div className="App">
      <header  style={{ backgroundColor: darkMode ? "#00090E" : "#B3CCFF", 
        color:darkMode ? "#B3CCFF": "#00090E"
    }} className="Background justi">
        <div className="empty"/>
        <Navbar/>
        <div className="empty2"/>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
      </header>
    
    </div>
  );
}

export default App;
