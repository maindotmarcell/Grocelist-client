import React, { useState } from 'react';

function AddGroupMember() {
	const [userEmail, setUserEmail] = useState();
	const [groupID, setGroupID] = useState('');

	// api call to add member to page
	const addMember = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch('https://grocelist-server.herokuapp.com/api/groups/add-group-member', {
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
		} catch (err) {
			console.log(err);
		}
	};

	// rendering page
	return (
		<div>
			<form onSubmit={addMember}>
				<input
					value={groupID}
					onChange={(e) => setGroupID(e.target.value)}
					type="text"
					data-testid="groupID"
					placeholder="Group ID"
				/>
				<br />
				<input
					value={userEmail}
					onChange={(e) => setUserEmail(e.target.value)}
					type="email"
					data-testid="userEmail"
					placeholder="User Email"
				/>
				<br />
				<input type="submit" value={`Add user to group: ${groupID}`} />
			</form>
		</div>
	);
}

export default AddGroupMember;
