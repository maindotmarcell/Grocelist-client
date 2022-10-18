import { createContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState({});

	const storeUser = (loggedInUser) => {
		// console.log(loggedInUser);
		setUser(loggedInUser);
	};
	// alert(JSON.stringify(user));

	return (
		<UserContext.Provider value={{ user, storeUser }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
