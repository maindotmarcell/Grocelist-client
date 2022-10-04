import { render, screen } from '@testing-library/react';
import App from './App';
import Todo from './Pages/Todos/Todo';
import CreateGroup from './Pages/__Dev-Test/CreateGroup';
import AddGroupMember from './Pages/__Dev-Test/AddGroupMember';
import Reminder from './Pages/Reminders/Reminders';
test('renders the correct initial DOM', () => {
  const doc = render(<Todo />);

  const inputElement = doc.getByTestId('input');

  const todos = doc.queryAllByTestId('todo');

  // The input should be blank.
  expect(inputElement.getAttribute('value')).toBe('');

  // There should be 0 todos in the document.
  expect(todos.length).toBe(0);
});
