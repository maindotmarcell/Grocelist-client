import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import styles from './Invites.module.css';
import axios from 'axios';

const Invites = () => {
	const [invites, setInvites] = useState([]);
	const { user } = useContext(UserContext);

	useEffect(() => {
		getInvites();
	}, []);

	const getInvites = async () => {
		try {
			const response = await axios.get(
				`http://localhost:1337/api/invites/get-invites/${user.id}`,
				{
					headers: {
						'Content-Type': 'application/json',
						'x-access-token': localStorage.getItem('token'),
					},
				}
			);
			console.log(response);
			setInvites(response.data.invites);
		} catch (err) {
			console.log(err);
		}
	};

	const acceptInvite = (inviteID) => {
		axios
			.put(
				`http://localhost:1337/api/invites/accept-invite/${inviteID}`,
				{},
				{
					headers: {
						'Content-Type': 'application/json',
						'x-access-token': localStorage.getItem('token'),
					},
				}
			)
			.then((response) => {
				console.log(response);
				getInvites();
			})
			.catch((err) => console.log(err));
		// setInvites(invites.filter((invite) => invite.id !== inviteID));
	};

	const declineInvite = (inviteID) => {
		axios
			.put(
				`http://localhost:1337/api/invites/decline-invite/${inviteID}`,
				{},
				{
					headers: {
						'Content-Type': 'application/json',
						'x-access-token': localStorage.getItem('token'),
					},
				}
			)
			.then((response) => {
				console.log(response);
				getInvites();
			})
			.catch((err) => console.log(err));

	};

	return (
		<div>
			<h3>Your Pending Invites</h3>
			<div className={styles.home}></div>
			{invites.map((invite) => {
				return (
					<div className={styles.card}>
						<h3>{invite.group.name}</h3>
						<p>From: {invite.inviter.name}</p>
						<button onClick={() => acceptInvite(invite.id)}>Accept</button>
						<button onClick={() => declineInvite(invite.id)}>Decline</button>
					</div>
				);
			})}
		</div>
	);
};

export default Invites;
