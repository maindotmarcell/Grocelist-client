import { createContext, useState } from "react";
import CreateNewList from "./CreateNewList";
import { useNavigate } from 'react-router-dom';
//import TimeLine from "./TimeLine";
export const GroceryListContext = createContext();

//Define list elements and set useState to empty array
const App = () => {
  const [listCollection, setListCollection] = useState([]);
  const [createNewList, setCreateNewList] = useState(false);
  const navigate = useNavigate();

  const openCreateNewList = () => {
    setCreateNewList(true);
  };

  const closeCreateNewList = () => {
    setCreateNewList(false);   //value must be true
  };

  const deleteList = (list) => {
    setListCollection(
      listCollection.filter((singleList) => singleList !== list)  //Delete list value if singlist value does equal the existing list value
    );
  };
  //provider component passes the values given 
  return (
    <GroceryListContext.Provider value={{ listCollection, setListCollection }}> 
	  <button onClick={() => navigate(-1)}>Go back</button>
      <h2>Grocery Lists</h2>
      <div>
        <button onClick={openCreateNewList}>Create New List</button>
        <button onClick={closeCreateNewList}>Close</button>
		
		<button onClick={() => navigate('/groups/menu/timeline')}>View Timeline</button>
      </div>
      {createNewList && <CreateNewList />}
      <h3>All Lists</h3>
      {listCollection &&
        listCollection.map((groceryList, index) => {
          return (
            <div
              key={groceryList}
              style={{ border: "1px solid grey", width: "400px" }}
            >
              <h3>{groceryList.title}</h3>
              <button onClick={() => deleteList(groceryList)}>
                Delete List
              </button>
              {groceryList.items.map((item, index) => {
                return (
                  <div key={`${item}-${index}`}>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
    </GroceryListContext.Provider>
  );
};

export default App;