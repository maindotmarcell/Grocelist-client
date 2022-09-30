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
	return (
		<div className="App">
			<Navbar data={{ sideToggle, setsideToggle }} />
			<div className="main_content">
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path="/" element={<Home />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/todos" element={<Todo />} />
						<Route path="/lists" element={<List />} />
					</Route>
					<Route path="/register" element={<Registration />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
