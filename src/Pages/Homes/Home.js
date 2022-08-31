import React from 'react';
import styles from './Home.module.css';
const Home = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className={styles.home}>
        <div className={styles.card}>
          <h4>Rent</h4>
          <p>$120</p>
          <p>Due 12 September2022</p>
        </div>
        <div className={styles.card}>
          <h4>WaterBill</h4>
          <p>$220</p>
          <p>Due 12 September 2022</p>
        </div>
        <div className={styles.card}>
          <h4>Electricity Bill</h4>
          <p>$220</p>
          <p>Due 12 September 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
