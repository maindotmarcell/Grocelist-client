import { useState, useContext, useEffect } from "react";
import { GroceryListContext } from "./List";

const CreateNewList = () => {
  const { listCollection, setListCollection } = useContext(GroceryListContext);
  const [newList, setNewList] = useState({
    title: "",
    items: []
  });
  const [newItem, setNewItem] = useState("");
  const [newListTitle, setNewListTitle] = useState("");

  const removeItem = (item) => {
    setNewList({
      items: newList.items.filter((listItem) => listItem !== item)
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    setNewList({
      items: [...newList.items, newItem]
    });
  };

  const addList = (e) => {
    e.preventDefault();
    console.log(newList);
    const newListCollection = [...listCollection, newList];
    setListCollection(newListCollection);
  };

  useEffect(() => {
    console.log("New List: ", newList);
  }, [newList]);

  return (
    <form
      onSubmit={addList}
      style={{
        border: "5px solid black",
        margin: "20px 10px",
        width: "400px",
        padding: "10px",
        position: "relative"
      }}
    >
      <h3>New List</h3>
      <div>
        <label htmlFor="newListTitle">Set a Title</label>
        <input
          id="newListTitle"
          name="newListTitle"
          value={newListTitle}
          required
          onChange={(e) => setNewListTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newItem">Enter New Item Here: </label>
        <input
          type="text"
          name="newItem"
          id="newItem"
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new item"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ol>
        {newList &&
          newList.items.map((item, index) => {
            console.log(item);
            return (
              <div
                key={`${index}-${item}`}
                style={{
                  border: "1px solid red",
                  borderRadius: "5px",
                  width: "100px",
                  padding: "8px 20px"
                }}
              >
                <p>{item}</p>
                <button onClick={() => removeItem(item)}>Delete</button>
              </div>
            );
          })}
      </ol>
      <button onClick={addList}>Save List</button>
    </form>
  );
};

export default CreateNewList;