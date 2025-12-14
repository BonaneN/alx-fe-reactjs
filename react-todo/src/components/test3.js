// src/__tests__/YourComponent.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import YourComponent from '../components/YourComponent'; // Adjust the import path as needed

test('renders without crashing', () => {
  render(<YourComponent />);
  expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
});

test('displays correct content', () => {
  render(<YourComponent />);
  expect(screen.getByRole('heading', { name: /hello, world!/i })).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('handles button click', () => {
  render(<YourComponent />);
  const button = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(button);
  expect(screen.getByText(/submitted/i)).toBeInTheDocument();
});
