import React from 'react'
import { render, screen } from '@testing-library/react';
import Dropdown from '../Dropdown';

const setupProps = {
  options: [{
    Text: 'text for 1',
    Value: 1,
  },{
    Text: 'text for 2',
    Value: 2,
  }],
  type: 'Direction',
  update: jest.fn(),
  selected: 1
}

test('renders dropdown initially without options', () => {
  const props = setupProps
  render(
      <Dropdown type={props.type}/>
  )
  const dropdownTitle = screen.getByText(/Select a Direction/i)
  expect(dropdownTitle).toBeInTheDocument()
  const dropdown = screen.getByTestId('dropdown-select')
  expect(dropdown.childElementCount).toEqual(4)
})

test('renders dropdown with props', () => {
  const props = setupProps
  render(
      <Dropdown {...props}/>
  )
  const dropdownOption1 = screen.getByText(/text for 1/i)
  expect(dropdownOption1).toBeInTheDocument()
  const dropdown = screen.getByTestId('dropdown-select')
  expect(dropdown.childElementCount).toEqual(4)
})