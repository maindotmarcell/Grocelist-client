import React, { useState } from 'react';


export default function App() {
  const [toggleForm, setToggleForm] = useState(false);
  const [groceryList, setGroceryList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const updateList = () => {
    const newList = [...groceryList, newItem];
    setGroceryList(newList);
  };

  return (
    <div className="Lists">
      <h3>Make a Grocery List!</h3>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setToggleForm(true)}>Create New List</button>
        <button onClick={() => setToggleForm(false)}>Close</button>
      </div>
      {toggleForm && (
        <div>
          <input
            type="text"
            placeholder="New Item"
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={updateList}>Add to List</button>
          <div
            style={{
              margin: "10px auto",
              border: "1px solid black",
              width: "200px",
              borderRadius: "10px",
              padding: "20px 15px"
            }}
          >
            <p>Grocery List</p>
            {groceryList.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}









        
        
    
    



