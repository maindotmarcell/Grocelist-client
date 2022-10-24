import axios from '../../../Constants/axios'
import { useState, useEffect } from 'react';
import styles from './Reminder.module.css';

const Reminder = () => {
  let today = new Date();
  let dd = today.getDate();

  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  today = mm + '-' + dd + '-' + yyyy;
  const [reminders, setReminders] = useState([]);
  const [reminderItems, setReminderItems] = useState('');
  const [date, setDate] = useState(today);
  const [user, setUser] = useState();
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    axios
      .get('/api/authentication/current-user', {
        headers: {
          'x-access-token': token,
        },
      })
      .then((response) => setUser(response.data.user.id))
      .then(() =>
        axios
          .get(`/api/personaltodos/:${user}`)
          .then((response) => console.log(response))
      ).catch((err) => {});
  }, [user]);

  const handleItems = (e) => {
    setReminderItems(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleChange = () => {
    setReminders((prevState) => [...prevState, { reminderItems, date }]);

    axios.post('/api/reminders', {
      user,
      date,
      reminders: reminderItems,
    });
  };

  return (
    <div className={styles.container}>
      <h2>Add a reminder 🔔</h2>
      <div className={styles.dateBox}>
        <div>Date: {date}</div>
        <div>
          <input type='date' value={date} onChange={handleDate} />
        </div>
      </div>
      <div className={styles.inputBox}>
        <input
          type='text'
          data-testid='input'
          className={styles.reminderInput}
          value={reminderItems}
          onChange={handleItems}
        />
        <div onClick={handleChange} className={styles.addButton}>
          +
        </div>
      </div>
      <div>
        {reminders?.map((i) => {
          return (
            <div>
              ‣ {i.reminderItems}--{i.date}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Reminder;
