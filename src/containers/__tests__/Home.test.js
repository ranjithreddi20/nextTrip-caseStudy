import React, { render, screen } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom'

test('renders home page link labelled FIND BY ROUTE', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const linkElement = screen.getByText(/FIND BY ROUTE/i)
  expect(linkElement).toBeInTheDocument()
})