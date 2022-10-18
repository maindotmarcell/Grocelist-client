import React, { useState } from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Todo from './Pages/Todos/Todo';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import List from './Pages/Lists/List';
import Reminder from './Pages/Reminders/Reminders';
import Registration from './Pages/Authentication/Registration';
import Login from './Pages/Authentication/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import CreateGroup from './Pages/__Dev-Test/CreateGroup';
import AddGroupMember from './Pages/__Dev-Test/AddGroupMember';
import ExistingGroups from './Pages/__Dev-Test/ExistingGroups';
import Groups from './Pages/Groups/Groups';
import { UserProvider } from './context/UserContext';

function App() {
	const [sideToggle, setsideToggle] = useState(true);
	return (
		<div className="App">
			<UserProvider>
				<Navbar className="nav" data={{ sideToggle, setsideToggle }} />
				<div className="main_content">
					<Routes>
						<Route element={<PrivateRoute />}>
							<Route path="/" element={<Home />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/todos" element={<Todo />} />
							<Route path="/lists" element={<List />} />
							<Route path="/reminders" element={<Reminder />} />
							<Route path="/create-group" element={<CreateGroup />} />
							<Route path="/existing-groups" element={<ExistingGroups />} />
							<Route path="/add-group-member" element={<AddGroupMember />} />
							<Route path="/groups" element={<Groups />} />
						</Route>
						<Route path="/register" element={<Registration />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</div>
			</UserProvider>
		</div>
	);
}

export default App;
