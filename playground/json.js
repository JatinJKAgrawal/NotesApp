var fs = require('fs');
var note = {
  title: 'firstNote',
  body: 'This is just the body of the first Note!'
}
var noteString = JSON.stringify(note);
fs.writeFileSync('notes.json', noteString);
var pNoteString = fs.readFileSync('notes.json');
var pNote = JSON.parse(pNoteString);

console.log(typeof pNote);
console.log(`<${pNote.title}>--><${pNote.body}>`);
