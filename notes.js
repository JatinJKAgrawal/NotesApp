var fs = require('fs');

var fetchNotes = () => {
  try{
    return notes = JSON.parse(fs.readFileSync('notes.json'));
  }catch(e){
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes.json',JSON.stringify(notes));
}

const addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  notes = fetchNotes();

  var duplicateNode = notes.filter( note => note.title === title );
  if(duplicateNode.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const remNote = (title) => {
  var notes = fetchNotes();
  notesFiltered = notes.filter(note => note.title !== title);
  saveNotes(notesFiltered);
  return !(notesFiltered.length === notes.length);
}

const readNote = (title) => {
  var notes = fetchNotes();
  return notes.find(note => note.title === title);
};

debugger;

const getAll = fetchNotes;


const logNote = (note) => {
  debugger;
  console.log(`\nTitle: ${note.title}`);
  console.log('___________________\n');
  console.log(note.body + '\n');
}


module.exports = {
  addNote,
  remNote,
  getAll,
  readNote,
  logNote
}
