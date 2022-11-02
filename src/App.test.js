import { render, screen } from '@testing-library/react';
import App from './App';
import Todo from './Pages/Personal/Todo/Todo';
import CreateGroup from './Pages/__Dev-Test/CreateGroup';
import AddGroupMember from './Pages/__Dev-Test/AddGroupMember';
import Reminder from './Pages/Personal/Reminders/Reminders';
import Dashboard from './Pages/Groups/Dashboard/Dashboard';
import List from './Pages/Groups/List/List';
import Login from './Pages/Authentication/Login/Login';
import Groups from './Pages/Groups/Groups/Groups';
import Invites from './Pages/Invites/Invites';
import Registration from './Pages/Authentication/Registration/Registration';
import CreateNewList from './Pages/Groups/List/CreateNewList';
import GroupMenu from './Pages/Groups/GroupMenu/GroupMenu';
import { useContext } from 'react';
import UserContext, { UserProvider } from './context/UserContext';
import { GroupProvider } from './context/GroupContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Timeline from './Pages/Groups/List/Timeline';

test('renders the correct initial DOM', () => {
  const view = render(
 		<Router>
			<GroupProvider>
				<UserProvider>
					<Todo />
				</UserProvider>
			</GroupProvider>
		</Router>
  );

  const inputElement = view.getByTestId('input');

  const todos = view.queryAllByTestId('todo');

  // The input should be blank.
  expect(inputElement.getAttribute('value')).toBe('');

  // There should be 0 todos in the viewument.
  expect(todos.length).toBe(0);
});

test('render the correct intial DOM for Reminders', () => {
	const view = render(<Reminder />);

	const groupInputEl = view.getByTestId('input');
	expect(groupInputEl.getAttribute('value')).toBe('');
});

//Test for adding group members
test('render the correct intial DOM for adding new users to groups', () => {
	const view = render(<AddGroupMember />);
	const groupInputlEl = view.getByTestId('groupID');
	const userInputEl = view.getByTestId('userEmail');
	expect(groupInputlEl.getAttribute('value')).toBe('');
	expect(userInputEl.getAttribute('value')).toBe('');
});

test('render the correct intial DOM for groups/main page', () => {
	const view = render(
		<Router>
			<GroupProvider>
				<UserProvider>
					<Login />
				</UserProvider>
			</GroupProvider>
		</Router>
	);
}); 

test('render the correct intial DOM for groups/main page', () => {
	const view = render(
		<Router>
			<GroupProvider>
				<UserProvider>
					<Registration />
				</UserProvider>
			</GroupProvider>
		</Router>
	);
}); 




//Test for dashboard management page
test('render the correct intial DOM for dashboard', () => {
	const view = render(
		<Router>
			<UserProvider>
				<GroupProvider>
					<Dashboard />
				</GroupProvider>
			</UserProvider>
		</Router>
	);
	const groupInputlEl = view.getByTestId('todoContainer');
	expect(groupInputlEl.getAttribute('value')).toBe(null);
});
// hello
//Test for list page
// test('render the correct to renders List', () => {
// 	const view = render(
// 		<Router>
// 			<UserProvider>
// 				<GroupProvider>
// 					<List />
// 				</GroupProvider>
// 			</UserProvider>
// 		</Router>
// 	);
// 	const inputElement = view.getByTestId('input');
// 	expect(inputElement.getAttribute('value')).toBe(null);
// });
