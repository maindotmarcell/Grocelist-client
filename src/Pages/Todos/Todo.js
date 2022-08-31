import React from 'react';

const Todo = () => {
  return (
    <>
      <div className='input'>
        <input type='text' placeholder='Grocery' />
        <input type='text' placeholder='price' />
      </div>
      <button>Add</button>
    </>
  );
};
export default Todo;
