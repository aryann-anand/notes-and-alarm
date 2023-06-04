import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note, index) => (
        <div key={index}>
          <p>{note.text}</p>
          <p>{note.timestamp}</p>
          <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
