import React from 'react';

const Todo = () => {
  return (
    <div>
      <div className='input'>
        <input type='text' placeholder='Grocery' />
        <input type='text' placeholder='price' />
      </div>
      <button>Add</button>
    </div>
  );
};
export default Todo;
