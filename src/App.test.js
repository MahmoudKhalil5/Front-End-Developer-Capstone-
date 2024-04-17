import { initializeTimes, updateTimes } from './components/Pages/Booking/index';

// Mock the fakeAPI module
jest.mock('./api/fakeAPI', () => ({
  fetchAPI: jest.fn(date => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}));

describe('updateTimes function', () => {
  test('should return the same array of available times regardless of the selected date', () => {
    const selectedDate = new Date();

    const currentAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const updatedTimes = updateTimes(selectedDate, currentAvailableTimes);

    expect(updatedTimes).toEqual(currentAvailableTimes);
  });
});
