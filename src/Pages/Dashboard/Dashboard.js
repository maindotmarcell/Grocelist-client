import React from 'react';
import { useState } from 'react';
import styles from './Dashboard.module.css';
import {IoAddCircleOutline, IoRemoveCircleOutline} from 'react-icons/io5'

const Dashboard = () => {
  const [dashnotes, setDashNotes] = useState('');
  const [notes, setNotes] = useState([]);
  
  const handleDash = () => {
    console.log(notes);
    setNotes((prevState) => [...prevState, { dashnotes }]);
  };

  const handleChange = (e) => {
    setDashNotes(e.target.value);
  };
 
  const handleDelete = () => {
    console.log(dashnotes);
    delete Dashboard.dashnotes;
  }

  return (
    <div className={styles.container}>
      <h1>General Dashboard</h1>
      <div>
        <input className={styles.input} type='text' value={dashnotes} placeholder='Enter Note Text' onChange={handleChange}/>
      </div>
      <button className={styles.handleButton} onClick={handleDash}> <IoAddCircleOutline/> </button>

      <div className={styles.note}>
        <h2>Group Notes</h2>
        <div>
        {notes.map((i) => 
        {return (
          <div className={styles.noteContent}>
            {i.dashtitles}
           ✏︎ {i.dashnotes}
           <button className={styles.handleDelete} onClick={handleDelete}> <IoRemoveCircleOutline/> </button>

          </div>
        ); })}
      </div>
      </div>
    </div>
  );
};
export default Dashboard;
