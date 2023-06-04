// Note form submission handler
document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();
    
    if (noteText !== '') {
      const timestamp = new Date().toLocaleString();
      const noteItem = createNoteItem(noteText, timestamp);
      document.getElementById('note-list').appendChild(noteItem);
      noteInput.value = '';
    }
  });
  
  // Reminder form submission handler
  document.getElementById('reminder-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const reminderInput = document.getElementById('reminder-input');
    const reminderText = reminderInput.value.trim();
    
    if (reminderText !== '') {
      const timestamp = new Date().toLocaleString();
      const reminderItem = createReminderItem(reminderText, timestamp);
      document.getElementById('reminder-list').appendChild(reminderItem);
      reminderInput.value = '';
    }
  });
  
  // Function to create a note item
  function createNoteItem(text, timestamp) {
    const noteItem = document.createElement('div');
    noteItem.classList.add('note');
  
    const noteText = document.createElement('p');
    noteText.textContent = text;
    noteItem.appendChild(noteText);
  
    const noteTimestamp = document.createElement('p');
    noteTimestamp.textContent = timestamp;
    noteItem.appendChild(noteTimestamp);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      noteItem.remove();
    });
    noteItem.appendChild(deleteButton);
  
    return noteItem;
  }
  
  // Function to create a reminder item
  function createReminderItem(text, timestamp) {
    const reminderItem = document.createElement('div');
    reminderItem.classList.add('reminder');
  
    const reminderText = document.createElement('p');
    reminderText.textContent = text;
    reminderItem.appendChild(reminderText);
  
    const reminderTimestamp = document.createElement('p');
    reminderTimestamp.textContent = timestamp;
    reminderItem.appendChild(reminderTimestamp);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      reminderItem.remove();
    });
    reminderItem.appendChild(deleteButton);
  
    return reminderItem;
  }
  