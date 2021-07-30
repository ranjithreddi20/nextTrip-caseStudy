import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import ItemList from '../ItemList';

const setupProps = {
  list: ['thing 1', 'thing 2']
}

test('renders list initially without options', () => {
  render(
      <ItemList list={undefined}/>
  )
  const list = screen.getByTestId('item-list-test-id')
  expect(list.childElementCount).toEqual(0)
})

test('renders list with props', () => {
  const props = setupProps
  render(
      <ItemList {...props}/>
  )
  const listOption1 = screen.getByText(/thing 1/i)
  const listOption2 = screen.getByText(/thing 2/i)
  
  expect(listOption1).toBeInTheDocument()
  expect(listOption2).toBeInTheDocument()
  const list = screen.getByTestId('item-list-test-id')
  expect(list.childElementCount).toEqual(2)
})