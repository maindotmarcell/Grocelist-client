import React, { useEffect, useState } from 'react';

function ExistingGroups() {
	const [groups, setGroups] = useState([]);

	// API call to fetch group members
	const getAllGroups = async () => {
		const response = await fetch('http://localhost:1337/api/groups/get-all-groups', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
		});
		const data = await response.json();
		if (response.status === 200) {
			setGroups(data.groups);
		} else {
			console.log(data.error);
		}
	};

	// useEffect to trigger group getting function on page load
	useEffect(() => {
		getAllGroups();
	}, []);

	// rendering pages (conditional to handle if there aren't any)
	if (groups.length > 0) {
		return (
			<div>
				<ul>
					{groups.map((group) => {
						return (
							<li key={group._id}>
								Name: {group.name}, ID: {group._id}
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else
		return (
			<div>
				<h1>No groups found</h1>
			</div>
		);
}

export default ExistingGroups;
