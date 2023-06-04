import React, { useState } from 'react';

function ReminderForm({ addReminder }) {
  const [reminder, setReminder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reminder.trim() !== '') {
      addReminder({
        text: reminder,
        timestamp: new Date().toLocaleString(),
      });
      setReminder('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a reminder"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
      />
      <button type="submit">Add Reminder</button>
    </form>
  );
}

export default ReminderForm;
