import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NextTrip from '../NextTrip';
import { BrowserRouter } from 'react-router-dom'
import NextTripService from '../../../services/nextTripService'


test('each selection success', async () => {
  const getRoutes = jest.spyOn(NextTripService, 'getAllRoutes').mockReturnValue(
    Promise.resolve([{ Text: 'route 1', Value: 1 },{ Text: 'route 2', Value: 2}])
  )
  const getDirs = jest.spyOn(NextTripService, 'getDirections').mockReturnValue(
    Promise.resolve([{ Text: 'dir 3', Value: 3 },{ Text: 'dir 4', Value: 4}])
  )
  const getStops = jest.spyOn(NextTripService, 'getStops').mockReturnValue(
    Promise.resolve([{ Text: 'stop 5', Value: 5 },{ Text: 'stop 6', Value: 6}])
  )
  const getDepartures = jest.spyOn(NextTripService, 'getDepartures').mockReturnValue(
    Promise.resolve(['time 7', 'time 8'])
  )
  render(
    <BrowserRouter>
      <NextTrip />
    </BrowserRouter>
  )
  const routeSelector = screen.getByText(/select a route/i)
  
  await waitFor(() => screen.getByText(/route 1/i))
  expect(getRoutes).toHaveBeenCalled()
  expect(routeSelector.value).toBe('init')
  fireEvent.change(routeSelector.parentElement, { target: { value: 1 } })
  
  await waitFor(() => screen.getByText(/select a direction/i))
  const dirSelector = screen.getByText(/select a direction/i)
  expect(getDirs).toHaveBeenCalledWith('1')
  expect(routeSelector.parentElement.value).toBe('1')
  fireEvent.change(dirSelector.parentElement, { target: { value: 3 } })

  await waitFor(() => screen.getByText(/select a stop/i))
  const stopSelector = screen.getByText(/select a stop/i)
  expect(getStops).toHaveBeenCalledWith('1', '3')
  expect(dirSelector.parentElement.value).toBe('3')

  fireEvent.change(stopSelector.parentElement, { target: { value: 5 } })
  await waitFor(() => screen.getByText(/time 7/i))
  expect(getDepartures).toHaveBeenCalledWith('1', '3', '5')
  expect(stopSelector.parentElement.value).toBe('5')

  expect(screen.getByText(/time 7/i)).toBeInTheDocument()
  expect(screen.getByText(/time 8/i)).toBeInTheDocument()

})

test('no departures found for a stop', async () => {
  const getRoutes = jest.spyOn(NextTripService, 'getAllRoutes').mockReturnValue(
    Promise.resolve([{ Text: 'route 1', Value: 1 },{ Text: 'route 2', Value: 2}])
  )
  const getDirs = jest.spyOn(NextTripService, 'getDirections').mockReturnValue(
    Promise.resolve([{ Text: 'dir 3', Value: 3 },{ Text: 'dir 4', Value: 4}])
  )
  const getStops = jest.spyOn(NextTripService, 'getStops').mockReturnValue(
    Promise.resolve([{ Text: 'stop 5', Value: 5 },{ Text: 'stop 6', Value: 6}])
  )
  const getDepartures = jest.spyOn(NextTripService, 'getDepartures').mockReturnValue(
    Promise.resolve([])
  )
  render(
    <BrowserRouter>
      <NextTrip />
    </BrowserRouter>
  )
  const routeSelector = screen.getByText(/select a route/i)
  
  await waitFor(() => screen.getByText(/route 1/i))
  expect(getRoutes).toHaveBeenCalled()
  expect(routeSelector.value).toBe('init')
  fireEvent.change(routeSelector.parentElement, { target: { value: 1 } })
  
  await waitFor(() => screen.getByText(/select a direction/i))
  const dirSelector = screen.getByText(/select a direction/i)
  expect(getDirs).toHaveBeenCalledWith('1')
  expect(routeSelector.parentElement.value).toBe('1')
  fireEvent.change(dirSelector.parentElement, { target: { value: 3 } })

  await waitFor(() => screen.getByText(/select a stop/i))
  const stopSelector = screen.getByText(/select a stop/i)
  expect(getStops).toHaveBeenCalledWith('1', '3')
  expect(dirSelector.parentElement.value).toBe('3')

  fireEvent.change(stopSelector.parentElement, { target: { value: 5 } })
  await waitFor(() => screen.getByText(/No departures found/i))
  expect(getDepartures).toHaveBeenCalledWith('1', '3', '5')
  expect(stopSelector.parentElement.value).toBe('5')

  expect(screen.getByText(/No departures found/i)).toBeInTheDocument()

})
