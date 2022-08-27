import React from 'react';
import styles from './Home.module.css';
const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Dues</h1>
      <div className={styles.card}>
        <p>Rent</p>
        <p>$120</p>
        <p>Due 12 September2022</p>
      </div>
      <div className={styles.card}>
        <p>WaterBill</p>
        <p>$220</p>
        <p>Due 12 September 2022</p>
      </div>
      <div className={styles.card}>
        <p>Electricity Bill</p>
        <p>$220</p>
        <p>Due 12 September 2022</p>
      </div>
    </div>
  );
};

export default Home;
