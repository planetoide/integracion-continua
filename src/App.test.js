import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('hay un link de google', () => {
  render(<App />);
  const linkElement = screen.getByText(/google/i);
  expect(linkElement).toBeInTheDocument();
});
