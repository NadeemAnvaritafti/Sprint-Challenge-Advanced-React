import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import Card from './components/Card';
import SearchForm from './components/SearchForm';

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

test('search form labeled correctly', () => {
  const {getByText} = render(<SearchForm />);
  getByText(/player search/i)
})

test('placeholder labeled correctly', ()=> {
  const {getByPlaceholderText} = render(<SearchForm />);
  getByPlaceholderText(/search by name/i)
})