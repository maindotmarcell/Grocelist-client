import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupContext from '../../../context/GroupContext';

export default function App() {
	const [toggleForm, setToggleForm] = useState(false);
	const [groceryList, setGroceryList] = useState([]);
	const [newItem, setNewItem] = useState('');
	const { group } = useContext(GroupContext);
	const navigate = useNavigate();

	const updateList = () => {
		// get the items and assing to the grocery list
		const newList = [...groceryList, newItem];
		setGroceryList(newList);
	};

	return (
		<div className="Lists">
			<button onClick={() => navigate(-1)}>Go back</button>
			<h2>{group.name}</h2>
			<h3 data-testid="input">Make a Grocery List!</h3>
			<div style={{ marginBottom: '10px' }}>
				<button onClick={() => setToggleForm(true)}>Create New List</button>
				<button onClick={() => setToggleForm(false)}>Close</button>
			</div>
			{toggleForm && (
				<div>
					<input
						type="text"
						placeholder="New Item"
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
					/>
					<button onClick={updateList}>Add to List</button>
					<div
						style={{
							margin: '10px auto',
							border: '1px solid black',
							width: '200px',
							borderRadius: '10px',
							padding: '20px 15px',
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
