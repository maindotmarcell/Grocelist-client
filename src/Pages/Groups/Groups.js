import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';

function Groups() {
	const [groups, setGroups] = useState([]);
	const { user } = useContext(UserContext);

	useEffect(() => {
        console.log("hi");
		axios
			.get(`http://localhost:1337/api/groups/${user.id}`)
			.then((response) =>
				response.data.status === 'ok'
					? setGroups(response.data.groups)
					: console.log('error: ', response.data.error)
			)
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<ul>
				{groups.map((group) => {
					return <li>{group.name}</li>;
				})}
			</ul>
		</div>
	);
}

export default Groups;
