import React, { useState } from 'react';
import styles from './TodoStyle.module.css';

const Todo = () => {
  const [todoitems, setTodoItems] = useState();
  const [date, setDate] = useState();
  const [todo, setTodo] = useState([]);
  const handleTodo = () => {
    console.log(todo);
    setTodo((prevState) => [...prevState, { todoitems, date }]);
  };
  const handleChange = (e) => {
    setTodoItems(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <>
      <div>
        <div className='input'>
          <input type='text' placeholder='Grocery' onChange={handleChange} />
          <input type='text' placeholder='price' onChange={handleDate} />
        </div>
        <button onClick={handleTodo}>Add</button>
      </div>
      <div className={styles.todoContainer}>
        {todo.map((i) => {
          return (
            <div>
              {i.todoitems}--{i.date}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Todo;
