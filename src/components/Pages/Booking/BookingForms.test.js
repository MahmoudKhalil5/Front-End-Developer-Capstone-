import { initializeTimes, updateTimes } from './index';
import { fetchAPI, submitAPI } from '../../../api/fakeAPI';

// Mock the fetchAPI function to return a non-empty array of available booking times
jest.mock('../../../api/fakeAPI', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}));

describe('initializeTimes function', () => {
  test('should return correct array of times', () => {
    // Call the initializeTimes function
    const times = initializeTimes([]);

    // Define the expected array of times
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    // Expect the result to equal the expected array of times
    expect(times).toEqual(expectedTimes);
  });
});

// Test suite for the updateTimes function
describe('updateTimes function', () => {
  test('should return the same array of available times regardless of the selected date', () => {
    const selectedDate = new Date('2024-04-15'); // Provide a specific selected date

    const currentAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const updatedTimes = updateTimes(selectedDate, currentAvailableTimes);

    expect(updatedTimes).toEqual(currentAvailableTimes);
  });
});
