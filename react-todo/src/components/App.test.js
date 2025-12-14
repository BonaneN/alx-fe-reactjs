import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; // Adjust the import path as needed

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/todo app/i)).toBeInTheDocument();
  });

  test('renders TodoList component', () => {
    render(<App />);
    expect(screen.getByText(/todo list/i)).toBeInTheDocument(); // Check if TodoList header is present
  });

  test('allows user to add a new todo', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByRole('button', { name: /add todo/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText(/new todo/i)).toBeInTheDocument(); // Verify new todo appears in the list
  });
});
