import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutPg from './components/AboutPg';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] =useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
  <>
  <Router>
    <Navbar title="Edloops" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <Routes>
          <Route exact path="/about" element={<AboutPg/>} />
          <Route exact path="/" element={<TextForm heading="Enter a text to analyze below" mode={mode}/>}/>
      </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;
