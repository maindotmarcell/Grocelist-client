import React, { useState } from 'react';

function AddGroupMember() {
	const [userEmail, setUserEmail] = useState();
	const [groupID, setGroupID] = useState('');

	const addMember = async () => {
		const response = await fetch('http://localhost:1337/api/add-group-member', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				user_email: userEmail,
				group_id: groupID,
			}),
		});

		const data = await response.json();
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={addMember}>
				<input
					value={groupID}
					onChange={(e) => setGroupID(e.target.value)}
					type="text"
					placeholder="Group ID"
				/>
				<br />
				<input
					value={userEmail}
					onChange={(e) => setUserEmail(e.target.value)}
					type="email"
					placeholder="User Email"
				/>
				<br />
				<input type="submit" value={`Add user to group: ${groupID}`} />
			</form>
		</div>
	);
}

export default AddGroupMember;
