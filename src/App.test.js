import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import BookingPage from './BookingPage';
import {initializeTimes, updateTimes} from './BookingForm';
import { fetchAPI } from './api';

test('Renders the BookingForm date label', () => {
  const fakeTimes = [{ times: '17:00' }];
  const fakeDispatch = jest.fn();
  const fakeSubmitForm = jest.fn();

  render(<BookingForm availableTimes={fakeTimes} dispatch={fakeDispatch} submitForm={fakeSubmitForm}/>);
  const labelElement = screen.getByLabelText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
    const fakeTimes = [{ times: '17:00' }];
    const fakeDispatch = jest.fn();
    const fakeSubmitForm = jest.fn();
    render(<BookingPage availableTimes={fakeTimes} dispatch={fakeDispatch} submitForm={fakeSubmitForm}/>);
    const headingElement = screen.getByText("Booking Page");
    expect(headingElement).toBeInTheDocument();
})

jest.mock('./api');

describe('initializeTimes', () => {
  beforeEach(() => {
    fetchAPI.mockImplementation(() => ["17:00", "18:00", "19:00"]);
  });

  test('should return the list of times from fetchAPI', () => {
    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(["17:00", "18:00", "19:00"]);
  });
});

describe('updateTimes', () => {
  beforeEach(() => {
    fetchAPI.mockImplementation(() => ["17:00", "18:00", "19:00"]);
  });

  test('should return updated times for the given date', () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: new Date("2025-08-20") };

    const result = updateTimes(currentState, action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-08-20"));
    expect(result).toEqual(["17:00", "18:00", "19:00"]);
  });
});

test('BookingForm can be submitted by the user', () => {
  const mockDispatch = jest.fn();

  // Provide mock available times
  const mockAvailableTimes = [
    { times: '17:00' },
    { times: '18:00' },
  ];
  const mockSubmitForm = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm}/>);

  // Fill in the date
  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2025-08-20' } });

  // Fill in the time
  const timeSelect = screen.getByLabelText(/choose time/i);
  fireEvent.change(timeSelect, { target: { value: '18:00' } });

  // Fill in the number of guests
  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: '4' } });

  // Fill in the occasion
  const occasionSelect = screen.getByLabelText(/occasion/i);
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // Submit the form
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  fireEvent.click(submitButton);
  expect(dateInput.value).toBe('2025-08-20');
  expect(timeSelect.value).toBe('18:00');
  expect(guestsInput.value).toBe('4');
  expect(occasionSelect.value).toBe('Birthday');
});