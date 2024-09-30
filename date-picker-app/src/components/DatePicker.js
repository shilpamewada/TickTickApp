import React, { useState } from 'react';
import { useStore } from '../store';

const recurrenceOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const DatePicker = () => {
  const [selectedRecurrence, setSelectedRecurrence] = useState('Daily');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Zustand state management
  const setRecurrence = useStore((state) => state.setRecurrence);

  const handleRecurrenceChange = (e) => {
    setSelectedRecurrence(e.target.value);
    setRecurrence(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Date Picker</h2>

      <div className="mb-4">
        <label htmlFor="recurrence" className="block text-gray-700">Recurrence:</label>
        <select
          id="recurrence"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={selectedRecurrence}
          onChange={handleRecurrenceChange}
        >
          {recurrenceOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="start-date" className="block text-gray-700">Start Date:</label>
        <input
          type="date"
          id="start-date"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="end-date" className="block text-gray-700">End Date (optional):</label>
        <input
          type="date"
          id="end-date"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Selected Recurrence: {selectedRecurrence}</h3>
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate || 'No end date'}</p>
      </div>
    </div>
  );
};

export default DatePicker;
