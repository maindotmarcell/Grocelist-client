import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import axios from '../../../Constants/axios';
import GroupContext from '../../../context/GroupContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [dashnotes, setDashNotes] = useState('');
  const [notes, setNotes] = useState([]);
  const [notesC, setNotesC] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [user, setUser] = useState();
  const {group} = useContext(GroupContext);
  const navigate = useNavigate();

  useEffect(() => {
    //Get the token from localstorage
    const token = localStorage.getItem('token');
    //Retrieve the user based on the token
    axios
      .get('/api/authentication/current-user', {
        headers: {
          'x-access-token': token,
        },
      })
      .then((response) => {
        setUser(response.data.user.id);
        return response;
      })
      .then(() =>
        //After the first request is fulfilled get the todos for that user
        axios
          .get(`/api/personaltodos/${user}`)
          .then((response) => {
            setNotes(() => [response.data.todos]);
          })
      ).catch((err) => {});
  }, [user]);

  const handleDash = () => {
    console.log(notes);
    setNotesC((prevState) => [...prevState, { dashnotes }]);
  };
  //set the dashnotes to the value from the input field
  const handleChange = (e) => {
    setDashNotes(e.target.value);
  };
  //takes care of the delete function but not yet implemented
  const handleDelete = (i) => {
    const data = notesC.filter(s => s !== i )
    setNotesC(data);  
    
  };

  return (
    <div className={styles.container}>
			<button onClick={() => navigate(-1)}>Go back</button>
      <h2>{group.name}</h2>
      <h1>General Dashboard</h1>
      <div className={styles.note}>
        <input
          className={styles.input}
          type='text'
          value={dashnotes}
          placeholder='Enter Note Text'
          onChange={handleChange}
        />
        <button className={styles.handleButton} onClick={handleDash}>
          <IoAddCircleOutline />
        </button>
      </div>
      <div>
        {/**for any dashboard notes added, show them to the user */}
        {notesC?.map((i) => {
          return (
            <div className={styles.noteContent}>
              {i?.dashtitles}
              ✏︎ {i?.dashnotes}
              <button className={styles.handleDelete} onClick={()=>handleDelete(i)}>
                <IoRemoveCircleOutline />
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.note}>
        <h2>Personal Todos</h2>
        <div>
          {/**for any todos added, show them to the user */}
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
          {/**for any reminders added, show them to the user */}
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
