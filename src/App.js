import React, { useContext, useState } from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Todo from './Pages/Personal/Todo/Todo';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Groups/Dashboard/Dashboard';
import List from './Pages/Groups/List/List';
import CreateNewList from './Pages/Groups/List/CreateNewList';
import Reminder from './Pages/Personal/Reminders/Reminders';
import Registration from './Pages/Authentication/Registration/Registration';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthRoute from './PrivateRoute/AuthRoute';
import CreateGroup from './Pages/__Dev-Test/CreateGroup';
import AddGroupMember from './Pages/__Dev-Test/AddGroupMember';
import ExistingGroups from './Pages/__Dev-Test/ExistingGroups';
import Groups from './Pages/Groups/Groups/Groups';
import GroupMenu from './Pages/Groups/GroupMenu/GroupMenu';
import Invites from './Pages/Invites/Invites';
import UserContext, { UserProvider } from './context/UserContext';
import { GroupProvider } from './context/GroupContext';
import User from './Pages/Authentication/User';
import Timeline from './Pages/Groups/List/Timeline';

function App() {
	const [sideToggle, setsideToggle] = useState(true);
	return (
		<div className="App">
			<UserProvider>
				<GroupProvider>
					<Navbar className="nav" data={{ sideToggle, setsideToggle }} />
					<div className="main_content">
						<Routes>
							<Route element={<PrivateRoute />}>
								<Route path="/" element={<Home />} />
								<Route path="/groups/menu/dashboard" element={<Dashboard />} />
								<Route path="/todos" element={<Todo />} />
								<Route path="/groups/menu/list" element={<List />} />
								<Route path="/reminders" element={<Reminder />} />
								<Route path="/create-group" element={<CreateGroup />} />
								<Route path="/existing-groups" element={<ExistingGroups />} />
								<Route path="/add-group-member" element={<AddGroupMember />} />
								<Route path="/groups" element={<Groups />} />
								<Route path="/groups/menu" element={<GroupMenu />} />
								<Route path="/invites" element={<Invites />} />
								<Route path="/user" element={<User />} />
							</Route>
							<Route element={<AuthRoute />}>
								<Route path="/register" element={<Registration />} />
								<Route path="/login" element={<Login />} />
							</Route>
						</Routes>
					</div>
				</GroupProvider>
			</UserProvider>
		</div>
	);
}

export default App;
