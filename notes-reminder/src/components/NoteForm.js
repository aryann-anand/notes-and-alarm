import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() !== '') {
      addNote({
        text: note,
        timestamp: new Date().toLocaleString(),
      });
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
