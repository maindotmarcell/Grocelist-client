import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import axios from 'axios';

const Dashboard = () => {
  const [dashnotes, setDashNotes] = useState('');
  const [notes, setNotes] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:1337/api/current-user', {
        headers: {
          'x-access-token': token,
        },
      })
      .then((response) => {
        setUser(response.data.user._id);
        return response;
      })
      .then(() =>
        axios
          .get(`http://localhost:1337/api/personaltodos/${user}`)
          .then((response) => {
            setNotes(() => [response.data.todos]);
          })
      );
  }, [user]);

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
  };

  return (
    <div className={styles.container}>
      <h1>General Dashboard</h1>

      <div className={styles.note}>
        <h2>Personal Todos</h2>
        <div>
          {notes.length !== 0 ? (
            notes?.map((i) => {
              return (
                <div className={styles.noteContent}>
                  {i?.todo}
                  ✏︎ {i?.date}
                  <button
                    className={styles.handleDelete}
                    onClick={handleDelete}
                  >
                    <IoRemoveCircleOutline />
                  </button>
                </div>
              );
            })
          ) : (
            <div data-testid='todoContainer'>There are no todos</div>
          )}
        </div>
      </div>
      <div className={styles.note}>
        <h2>Reminders</h2>
        <div>
          {notes.length !== 0 ? (
            notes?.map((i) => {
              return (
                <div className={styles.noteContent}>
                  {i?.todo}
                  ✏︎ {i?.date}
                  <button
                    className={styles.handleDelete}
                    onClick={handleDelete}
                  >
                    <IoRemoveCircleOutline />
                  </button>
                </div>
              );
            })
          ) : (
            <div>There are no reminders</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
