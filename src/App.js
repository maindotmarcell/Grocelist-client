import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import Todo from './Pages/Todos/Todo';
import Home from './Pages/Homes/Home';
import Reminders from './Pages/Reminders/Reminders';

function App() {
  const [sideToggle, setsideToggle] = useState(true);
  return (
    <div className='App'>
      <Navbar data={{ sideToggle, setsideToggle }} />
      <div className='main_content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/personaltodo' element={<Todo />} />
          <Route path='/reminders' element={<Reminders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
