const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
  describe: '<Title of the note>',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: '<Body of the note>',
  demand: true,
  alias: 'b'
}

const argv = yargs
.command('add','Adds a note',{
  title: titleOptions,
  body: bodyOptions
})
.command('read','Read a note',{
  title:titleOptions
})
.command('list','lists all nodes')
.command('remove','Removes a note',{
  title:titleOptions
})
.help()
.argv;

var command = argv._[0];

switch(command){

  case 'add':
    note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log(`${note.title} added successfully!`);
        notes.logNote(note);
    }else {
        console.log('Duplicate title!');
    }
    break;

  case 'remove':
    var noteRemoved = notes.remNote(argv.title);
    var msg = noteRemoved ? `Note(Title:'${argv.title}') removed successfully!` : `Note(Title:'${argv.title}') not found!`;
    console.log(msg);
    break;

  case 'list':
    var allNotes = notes.getAll();
    debugger;
    console.log(`Printing ${allNotes.length} note(s)..`);
    allNotes.forEach(note => notes.logNote(note));

    break;
  case 'read':
    var note = notes.readNote(argv.title);
    if(!note) {
      console.log(`\nError: Title(${argv.title}) not found!`);
      break;
    }
    console.log(`Reading Note..`);
    notes.logNote(note);
    break;
  default:
    console.log('Invalid command!');
}
