import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { Routes } from 'react-router-dom';
import Todo from './Pages/Todo';

function App() {
  const [sideToggle, setsideToggle] = useState(true);
  return (
    <div className='App'>
      <Navbar data={{ sideToggle, setsideToggle }} />
      <div className='main_content'>
        <Todo style='marginTop:40px' />
      </div>
    </div>
  );
}

export default App;
