import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutPg from './components/AboutPg';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
    <Navbar title="Edloops" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading="Enter a text to analyze below" mode={mode}/>
      <AboutPg/>
    </div>
  </>
  );
}

export default App;
