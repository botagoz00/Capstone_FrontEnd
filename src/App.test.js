import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import BookingPage from './BookingPage';
import {initializeTimes, updateTimes, validateDate, validateGuests, validateOccasion, validateTime} from './BookingForm';
import { fetchAPI } from './api';

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

test("Guests input should have correct HTML5 attributes", () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);

  const guestsInput = screen.getByLabelText(/number of guests/i);

  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "20");
});

test("Date input should be of type date", () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("type", "date");
});

test("Time select should exist and be required", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={jest.fn()} submitForm={jest.fn()} />);
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toBeInTheDocument();
});

test("Occasion select should have default placeholder option", () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveDisplayValue("Choose occasion");
});

describe("validateDate", () => {
  test("returns error if no date is provided", () => {
    expect(validateDate("")).toBe("Please choose a date.");
  });

  test("returns error if date is in the past", () => {
    const pastDate = "2020-01-01";
    expect(validateDate(pastDate)).toBe("Date cannot be in the past.");
  });

  test("returns empty string for valid future date", () => {
    const futureDate = "2099-12-31";
    expect(validateDate(futureDate)).toBe("");
  });
});

describe("validateTime", () => {
  test("returns error if no time selected", () => {
    expect(validateTime("")).toBe("Please select a time.");
  });

  test("returns empty string if valid time is selected", () => {
    expect(validateTime("18:00")).toBe("");
  });
});

describe("validateGuests", () => {
  test("returns error if guests < 1", () => {
    expect(validateGuests("0")).toBe("Guests must be between 1 and 20.");
  });

  test("returns error if guests > 20", () => {
    expect(validateGuests(25)).toBe("Guests must be between 1 and 20.");
  });

  test("returns empty string if guests count valid", () => {
    expect(validateGuests(4)).toBe("");
  });
});

describe("validateOccasion", () => {
  test("returns error if default option selected", () => {
    expect(validateOccasion("Choose occasion")).toBe("Please choose an occasion.");
  });

  test("returns empty string if valid occasion selected", () => {
    expect(validateOccasion("Birthday")).toBe("");
  });
});