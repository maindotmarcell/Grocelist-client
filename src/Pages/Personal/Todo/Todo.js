import React, { useEffect, useState, useContext } from 'react';
import styles from './TodoStyle.module.css';
import { IoAddCircleOutline } from 'react-icons/io5';
import axios from 'axios';
import UserContext from '../../../context/UserContext';
import { AiFillDelete } from 'react-icons/ai';

const Todo = () => {
  const year = new Date().getFullYear();
  const { user } = useContext(UserContext);
  const [item, setItems] = useState([]);
  const [update, setUpdate] = useState(false);
  console.log(user);
  const handleUpdate = (i) => {
    axios
      .patch(`http://localhost:1337/api/personaltodos/${i}`, { status: true })
      .then((response) => console.log(response));
    setUpdate(!update);
  };

  const handleDelete = (i) => {
    axios
      .delete(`http://localhost:1337/api/personaltodos/${i}`)
      .then((response) => console.log(response));
    setUpdate(!update);
  };
  useEffect(() => {
    //Make an api request if the user has the token
    axios
      .get(`http://localhost:1337/api/personaltodos/${user.id}`)
      .then((response) => setItems(() => [response.data.todos][0]));
  }, [update]);
  console.log(item);
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
    //On button Click send the data to the user.
    // send the data to the backend based on the current user

    axios.post('http://localhost:1337/api/personaltodos', {
      user: user.id,
      todo: todoitems,
      date,
    });
    setUpdate(!update);
  };
  const handleChange = (e) => {
    //set the todoItems to the value from the input field
    setTodoItems(e.target.value);
  };
  const handleDate = (e) => {
    //set the date to the curernt value as the user selects
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
            {/*if there are any todos show it to the user*/}
            {item.map((i) => {
              console.log(i);
              return (
                <div className={styles.todoList}>
                  {i.status ? (
                    <span style={{ textDecoration: 'line-through' }}>
                      {' '}
                      ‣ {i.todo}--{i.date}
                    </span>
                  ) : (
                    <div>
                      {' '}
                      ‣ {i.todo}--{i.date}{' '}
                    </div>
                  )}

                  <button onClick={() => handleUpdate(i._id)}>
                    Mark As Done
                  </button>
                  <AiFillDelete onClick={() => handleDelete(i._id)} />
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
