import { createContext, useState } from 'react';

const GroupContext = createContext();

export function GroupProvider({ children }) {
	const [group, setGroup] = useState({});

	const storeGroup = (selectedGroup) => {
		console.log(selectedGroup);
		setGroup({
            id: selectedGroup._id,
            name: selectedGroup.name,
            users: selectedGroup.users,
        });
	};

	return (
		<GroupContext.Provider value={{ group, storeGroup }}>
			{children}
		</GroupContext.Provider>
	);
}

export default GroupContext;
