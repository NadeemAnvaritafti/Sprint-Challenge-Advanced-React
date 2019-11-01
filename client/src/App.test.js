import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import Card from './components/Card';

test('renders without crashing', () => {
  render(<App />);
});

test('renders Navbar component', () => {
  render(<Navbar />);
});

test('renders Card component', () => {
  render(<Card />);
});

test('Navbar Heading is labeled correctly', () => {
  const {getByText} = render(<Navbar />);
  getByText(/wwc google trends/i)
});

test('div wrapping each card', () => {
  const {getByTestId} = render(<Card />);
  getByTestId('cardDiv')
})