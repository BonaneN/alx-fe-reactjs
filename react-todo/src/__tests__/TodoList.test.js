import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/learn jest/i)).toBeInTheDocument();
  });

  test('allows user to add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByRole('button', { name: /add todo/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
  });

  test('allows user to toggle todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/learn react/i);

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('allows user to delete a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/delete/i)[0]; // Select the first delete button
    const todoItem = screen.getByText(/learn react/i);

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
