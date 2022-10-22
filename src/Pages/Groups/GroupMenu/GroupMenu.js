import React, { useState, useContext, useEffect } from 'react';
import GroupContext from '../../../context/GroupContext';
import styles from './GroupMenu.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Groups from '../Groups/Groups';

function GroupMenu() {
	const [members, setMembers] = useState([]);
	const [listLength, setListLength] = useState([]);
	const [dashboardLength, setDashboardLength] = useState([]);
	const { group } = useContext(GroupContext);
	const navigate = useNavigate();

	useEffect(() => {
		// request to get group members
		axios
			.get(`http://localhost:1337/api/groups/get-members/${group.id}`, {
				headers: {
					'Content-Type': 'application/json',
					'x-access-token': localStorage.getItem('token'),
				},
			})
			.then((response) => setMembers(response.data.users))
			.catch((err) => console.log(err));

		// request to get group grocery list
		axios
			.get(`http://localhost:1337/api/groups/get-list/${group.id}`, {
				headers: {
					'Content-Type': 'application/json',
					'x-access-token': localStorage.getItem('token'),
				},
			})
			.then((response) => setListLength(response.data.list.items.length))
			.catch((err) => console.log(err));

		// request to get group dashboard
		axios
			.get(`http://localhost:1337/api/groups/get-dashboard/${group.id}`, {
				headers: {
					'Content-Type': 'application/json',
					'x-access-token': localStorage.getItem('token'),
				},
			})
			.then((response) =>
				setDashboardLength(response.data.dashboard.items.length)
			)
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<button onClick={() => navigate(-1)}>Go back</button>
			<h1>{group.name} spaces:</h1>
			<div className={styles.card}>
				<h3>Grocery List</h3>
				<p>Number of items: {listLength}</p>
				<button onClick={() => navigate('/groups/menu/list')}>
					View Grocery List
				</button>
			</div>
			<div className={styles.card}>
				<h3>Group Dashboard</h3>
				<p>Number of items: {dashboardLength}</p>
				<button onClick={() => navigate('/groups/menu/dashboard')}>
					View Dashboard
				</button>
			</div>
			<div className={styles.card}>
				<h3>Members</h3>
				<ul>
					{members.map((member) => {
						return <li>{member}</li>;
					})}
				</ul>
				<button>Invite New Member</button>
			</div>
		</div>
	);
}

export default GroupMenu;
