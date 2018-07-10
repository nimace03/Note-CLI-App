const fs = require('fs');
// Creating module
// Every node.js file include module
// console.log(module);

// module.export is use to help to share function and variable to other node.js files

//Varable
// module.exports.name = 'Notes';
// module.exports.add = ()=>{
// 	console.log('Sum');
// 	return sum;
// };

// Fetech notes from Json
var fetcheNotes = ()=>{
	try{
		var noteString = fs.readFileSync('notes-Json.json');
		return JSON.parse(noteString);
	}catch(e){
		return [];
	}
};

//Save note in Json file
var saveNote = (notes)=>{
	fs.writeFileSync('notes-Json.json',JSON.stringify(notes));
};

//Add note
var addNote = (title,body)=>{
	var notes = fetcheNotes();
	var note = {
		title,
		body
	};
	var duplicateNote = notes.filter((note)=> note.title === title); //ES6  format for callback function
	console.log(duplicateNote.length);
	if(duplicateNote.length === 0){
		notes.push(note);
		saveNote(notes);
		return note;
	}
};

//View All notes
var allNote = ()=>{
	var notes = fetcheNotes();
	return notes;
};

//Read Specific Note
var readNote = (title)=>{
	var notes = fetcheNotes();
	var readNote = notes.filter((note)=> note.title === title);
	return readNote[0];
};

//Remove Note
var noteRemove = (title)=>{
	var notes = fetcheNotes();
	var delNote = notes.filter((note) => note.title !== title);
	saveNote(delNote);
};

// Display msg
var displayResult = (readNote)=>{
	console.log(`Title : ${readNote.title}`);
	console.log(`Body : ${readNote.body}`);
};

// Export Modules
module.exports = {
	addNote,
	allNote,
	readNote,
	noteRemove,
	displayResult
};
