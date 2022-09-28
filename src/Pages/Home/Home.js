import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
	

	return (
		<div className={styles.home}>
			<h1>Dues</h1>
			<div className={styles.card}>
				<h3>Rent</h3>
				<p>$120</p>
				<p>Due 12 September2022</p>
			</div>
			<div className={styles.card}>
				<h3>WaterBill</h3>
				<p>$220</p>
				<p>Due 12 September 2022</p>
			</div>
			<div className={styles.card}>
				<h3>Electricity Bill</h3>
				<p>$220</p>
				<p>Due 12 September 2022</p>
			</div>
		</div>
	);
};

export default Home;
