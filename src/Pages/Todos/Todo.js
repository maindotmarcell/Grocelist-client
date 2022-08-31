import React, { useState } from 'react';
import styles from './Todo.module.css';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [grocery, setGrocery] = useState('');
  const [date, setDate] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className='input'>
          <input
            type='text'
            placeholder='Grocery'
            onChange={(e) => setGrocery(e.target.value)}
          />
          <input
            type='text'
            placeholder='price'
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          className={styles.btn}
          onClick={() =>
            setTodo((prevValue) => [...prevValue, { grocery, date }])
          }
        >
          Add
        </button>
      </div>
      <div>
        {todo.map((i) => (
          <>
            <div>
              <p></p>
              {i.grocery}
            </div>
            <span>{i.date}</span>
          </>
        ))}
      </div>
    </div>
  );
};
export default Todo;
