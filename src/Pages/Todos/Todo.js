import React, { useEffect, useState } from 'react';
import styles from './TodoStyle.module.css';
import { IoAddCircleOutline } from 'react-icons/io5';
import axios from 'axios';

const Todo = () => {
  const year = new Date().getFullYear();
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    axios
      .get('http://localhost:1337/api/current-user', {
        headers: {
          'x-access-token': token,
        },
      })
      .then((response) => setUser(response.data.user._id))
      .then(() =>
        axios
          .get(`http://localhost:1337/api/personaltodos/:${user}`)
          .then((response) => console.log(response))
      );
  }, [user]);

  const month = new Date().toLocaleString('en-US', {
    month: 'long',
  });
  const day = new Date().getDay();
  const currentDate = `${year} ${month} ${day}`;

  const [todoitems, setTodoItems] = useState('');
  const [date, setDate] = useState(currentDate);
  const [todos, setTodos] = useState([]);
  const handleTodo = async () => {
    console.log(todos);

    setTodos((prevState) => [...prevState, { todoitems, date }]);

    axios.post('http://localhost:1337/api/personaltodos', {
      user,
      todo: todoitems,
      date,
    });
  };
  const handleChange = (e) => {
    setTodoItems(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h2>Add Todo List 📋</h2>
      <div className={styles.content_outer}>
        <div className={styles.content_inner}>
          <div className={styles.selected_Date}>
            <div className={styles.timeStamp}>Date: {date}</div>
            <div>
              Select a Date
              <input type='date' onChange={handleDate} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
              <input
                className={styles.todoInput}
                type='text'
                value={todoitems}
                placeholder='Grocery'
                data-testid='input'
                onChange={handleChange}
              />
            </div>
            <button className={styles.handleButton} onClick={handleTodo}>
              <IoAddCircleOutline />
            </button>
          </div>
          <div className={styles.todoListContainer}>
            {todos.map((i) => {
              return (
                <div className={styles.todoList}>
                  ‣ {i.todoitems}--{i.date}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;
