import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import Todo from './Pages/Todos/Todo';
import Home from './Pages/Homes/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import List from './Pages/Lists/List';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
	const [sideToggle, setsideToggle] = useState(true);

	// ------- everything in here is just to test the import from db -----------------
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, 'users');

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getUsers();
	}, []);

	users.map((user) => console.log('Username: ', user.name));
	// ------- ends here --------------------------------------------------------------

	return (
		<div className="App">
			<Navbar data={{ sideToggle, setsideToggle }} />
			<div className="main_content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/todos" element={<Todo />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/lists" element={<List />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
