import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../../../context/UserContext';
import styles from './Groups.module.css';
import GroupContext from '../../../context/GroupContext';
import { useNavigate } from 'react-router-dom';

function Groups() {
	const [groups, setGroups] = useState([]);
	const [isInput, setIsInput] = useState(false);
	const [newGroupName, setNewGroupName] = useState();
	const { user } = useContext(UserContext);
	const { storeGroup } = useContext(GroupContext);

	const navigate = useNavigate();

	const getGroups = () => {
		axios
			.get(`http://localhost:1337/api/groups/${user.id}`, {
				headers: {
					'Content-Type': 'application/json',
					'x-access-token': localStorage.getItem('token'),
				},
			})
			.then((response) => {
				console.log(response);
				response.data.status === 'ok'
					? setGroups(response.data.groups)
					: console.log('error: ', response.data.error);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getGroups();
	}, []);

	const createNewGroup = async (event) => {
		event.preventDefault();
		console.log('hi');

		try {
			const response = await axios.post(
				'http://localhost:1337/api/groups/create-new',
				{
					name: newGroupName,
					user: user.id,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'x-access-token': localStorage.getItem('token'),
					},
				}
			);
			console.log(response);
			getGroups();
		} catch (err) {
			console.log(err);
		}
		setIsInput(false);
	};

	const deleteGroup = async (id) => {
		try {
			const response = await axios.delete(
				`http://localhost:1337/api/groups/delete-group/${id}`,
				{
					headers: {
						'Content-Type': 'application/json',
						'x-access-token': localStorage.getItem('token'),
					},
				}
			);
			console.log(response);
			getGroups();
		} catch (err) {
			console.log(err);
		}
		setIsInput(false);
	};

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
							<button onClick={() => deleteGroup(group._id)}>
								Delete Group
							</button>
						</div>
					);
				})}
				<div className={styles.card}>
					<h3>New Group</h3>
					{isInput ? (
						<form onSubmit={createNewGroup}>
							<input
								type="text"
								placeholder="New Group Name"
								value={newGroupName}
								onChange={(e) => setNewGroupName(e.target.value)}
							/>
							<button onClick={() => setIsInput(false)}>Cancel</button>
							<input type="submit" value="Submit" />
						</form>
					) : (
						<div>
							<p>Create your own group</p>
							<button onClick={() => setIsInput(true)}>Create new group</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Groups;
