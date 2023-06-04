import React from 'react';

function ReminderList({ reminders, deleteReminder }) {
  return (
    <div>
      <h2>Reminders</h2>
      {reminders.map((reminder, index) => (
        <div key={index}>
          <p>{reminder.text}</p>
          <p>{reminder.timestamp}</p>
          <button onClick={() => deleteReminder(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ReminderList;
