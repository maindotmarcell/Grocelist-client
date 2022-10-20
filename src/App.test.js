import { render, screen } from '@testing-library/react';
import App from './App';
import Todo from './Pages/Personal/Todo/Todo';
import CreateGroup from './Pages/__Dev-Test/CreateGroup';
import AddGroupMember from './Pages/__Dev-Test/AddGroupMember';
import Reminder from './Pages/Personal/Reminders/Reminders';
import Dashboard from './Pages/Groups/Dashboard/Dashboard';
import List from './Pages/Groups/List/List';
import { useContext } from 'react';

test('renders the correct initial DOM', () => {
  const view = render(<Todo />);

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

// //Test for dashboard management page
// test('render the correct intial DOM for dashboard', () => {
//   const view = render(<Dashboard />);
//   const groupInputlEl = view.getByTestId('todoContainer');
//   expect(groupInputlEl.getAttribute('value')).toBe(null);
// });
// //Test for list page
// test('render the correct to renders List', () => {
//   const view = render(<List />);
//   const inputElement = view.getByTestId('input');
//   expect(inputElement.getAttribute('value')).toBe(null);
// });