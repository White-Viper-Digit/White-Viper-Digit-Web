import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  test('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });
});

it('should render the Home link', () => {
  render (<App />);
  expect(screen.getByRole ('link', { name: "Home"} )) . toßeInTheDocument();
  });
  
it('should render the Home header', () => {
  render (<App />);
  expect(screen.getByRole ('heading', { level: 2} )) . toßeInTheDocument();
  });