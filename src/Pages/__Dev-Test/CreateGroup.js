import React, { useState } from 'react';

function CreateGroup() {
	const [groupName, setGroupName] = useState();

	const createGroup = async (event) => {
		event.preventDefault();
		const response = await fetch('http://localhost:1337/api/create-group', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				group_name: groupName,
			}),
		});

        const data = await response.json();

        console.log(data)
	};

	return (
		<div>
			<form onSubmit={createGroup}>
				<input
					value={groupName}
					onChange={(e) => setGroupName(e.target.value)}
					type="text"
					placeholder="Group Name"
				/>
				<br />
				<input type="submit" value="Create Group" />
			</form>
		</div>
	);
}

export default CreateGroup;
