import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';

function App() {
  const [notes, setNotes] = useState([]);
  const [reminders, setReminders] = useState([]);

  // Callback function to add a new note
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Callback function to delete a note
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  // Callback function to add a new reminder
  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  // Callback function to delete a reminder
  const deleteReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  return (
    <div className="App">
      <h1>Notes and Reminders</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
      <ReminderForm addReminder={addReminder} />
      <ReminderList reminders={reminders} deleteReminder={deleteReminder} />
    </div>
  );
}

export default App;
