import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import BookingPage from './BookingPage';
import {initializeTimes, updateTimes} from './App';

test('Renders the BookingForm date label', () => {
  const fakeTimes = [{ times: '17:00' }];
  const fakeDispatch = jest.fn();

  render(<BookingForm availableTimes={fakeTimes} dispatch={fakeDispatch} />);
  const labelElement = screen.getByLabelText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
    const fakeTimes = [{ times: '17:00' }];
    const fakeDispatch = jest.fn();
    render(<BookingPage availableTimes={fakeTimes} dispatch={fakeDispatch}/>);
    const headingElement = screen.getByText("Booking Page");
    expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes', () => {
  test('should return expected list of times', () => {
    const expected = [
      { times: "17:00" },
      { times: "18:00" },
      { times: "19:00" },
      { times: "20:00" },
      { times: "21:00" },
      { times: "22:00" },
    ];

    expect(initializeTimes()).toEqual(expected);
  });
});

describe('updateTimes', () => {
  test('should return the same times as initializeTimes for now', () => {
    const currentState = [
      { times: "17:00" },
      { times: "18:00" },
    ];

    const action = { type: 'UPDATE_TIMES', date: '2025-08-20' };

    const result = updateTimes(currentState, action);

    expect(result).toEqual(initializeTimes());
  });
});

test('BookingForm can be submitted by the user', () => {
  const mockDispatch = jest.fn();

  // Provide mock available times
  const mockAvailableTimes = [
    { times: '17:00' },
    { times: '18:00' },
  ];

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

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