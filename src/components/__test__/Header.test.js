import React, { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom'

test(
  "renders Header page  with title Minneapolis's Metro Transit App", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const linkElement = screen.getByText(/Metro Transit App/i)
  expect(linkElement).toBeInTheDocument()
})