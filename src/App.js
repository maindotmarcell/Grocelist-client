import React, { useState } from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Todo from './Pages/Todos/Todo';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import List from './Pages/Lists/List';
import Registration from './Pages/Authentication/Registration';
import Login from './Pages/Authentication/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
	const [sideToggle, setsideToggle] = useState(true);
	const token = localStorage.getItem('token')
	return (
		<div className="App">
			<Navbar data={{ sideToggle, setsideToggle }} />
			<div className="main_content">
				<Routes>
					<Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
					<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
					<Route path="/todos" element={<PrivateRoute><Todo /></PrivateRoute>}/>
					<Route path="/lists" element={<PrivateRoute><List /></PrivateRoute>}/>
					<Route path="/register" element={<Registration />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
