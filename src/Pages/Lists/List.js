import React from 'react';

const List = () => {
  return (
    <div className= 'input'>
      <div className='input'>
        <h3>Lists</h3>
        <input type='text' placeholder='List Name' />
      </div>
      <button>Create List</button>
      <div className='input'>
        <input type='text' placeholder='Add Item' />
      </div>
      <button>Add Item</button>
    </div>
  );
};

export default List;
