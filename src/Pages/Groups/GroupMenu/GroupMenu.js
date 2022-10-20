import React, { useContext } from 'react';
import GroupContext from '../../../context/GroupContext';
import styles from './GroupMenu.module.css';
import { useNavigate } from 'react-router-dom';

function GroupMenu() {
	const { group } = useContext(GroupContext);
	const navigate = useNavigate();

	return (
		<div>
			<h1>{group.name} spaces:</h1>
			<div className={styles.card}>
				<h3>Grocery List</h3>
				<p>Number of items: {1}</p>
				<button onClick={() => navigate('/list')}>View Grocery List</button>
			</div>
			<div className={styles.card}>
				<h3>Group Dashboard</h3>
				<p>Number of items: {1}</p>
				<button onClick={() => navigate('/dashboard')}>View Dashboard</button>
			</div>
		</div>
	);
}

export default GroupMenu;
