import React, { useState, useEffect, useContext } from 'react';
import styles from './Invites.module.css';

const Invites = () => {
	return (
		<div>
            <h3>Your Pending Invites</h3>
			<div className={styles.home}></div>
		</div>
	);
};

export default Invites;
