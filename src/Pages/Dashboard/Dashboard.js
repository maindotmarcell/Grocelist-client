import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div class>
      <h1>General Notes and Dashboard</h1>
      <div className='input'>
        <input type='text' placeholder='New Note' />
      </div>
      <button>Add</button>
      <div className={styles.note}>
        <h3>Welcome Note</h3>
        <p>"Hi, all. Welcome to the dashboard"</p>
      </div>
      <button>Delete</button>
    </div>
  );
};
export default Dashboard;
