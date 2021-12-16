import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

xtest('App renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello World');
  expect(linkElement).toBeInTheDocument();
});
