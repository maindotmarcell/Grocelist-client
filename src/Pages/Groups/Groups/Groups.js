import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../../../context/UserContext';
import styles from './Groups.module.css';
import GroupContext from '../../../context/GroupContext';
import { useNavigate } from 'react-router-dom';

function Groups() {
	const [groups, setGroups] = useState([]);
	const { user } = useContext(UserContext);
	const { storeGroup } = useContext(GroupContext);

	const navigate = useNavigate();

	useEffect(() => {
		console.log('hi');
		axios
			.get(`http://localhost:1337/api/groups/${user.id}`)
			.then((response) =>
				response.data.status === 'ok'
					? setGroups(response.data.groups)
					: console.log('error: ', response.data.error)
			)
			.catch((err) => console.log(err));
	}, []);

	const selectGroup = (selectedGroup) => {
		storeGroup(selectedGroup);
		navigate('/groups/menu');
	};

	return (
		<div>
			<h1>Your Groups</h1>
			<div className={styles.home}>
				{groups.map((group) => {
					return (
						<div className={styles.card}>
							<h3>{group.name}</h3>
							<p>Members: {group.users.length}</p>
							<button onClick={() => selectGroup(group)}>Visit Group</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Groups;
