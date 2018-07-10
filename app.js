const fs = require('fs');

// own module
const note = require('./notes.js');

// from npm
const _ = require('lodash');
const yargs = require('yargs');

// Process module which is preloaded in node.js files
const command = process.argv[2];
const titleObj = {
					describe : 'title of note',
					demand : true,
					alias : 't'
				};
const bodyObj = {
					describe : 'Describtion of note',
					demand : true,
					alias : 'b'
				};
const argv = yargs
			.command('add','Add new note',{
				title: titleObj,
				body: bodyObj
			})
			.command('list','List All the note',{
				title : titleObj
			})
			.command('remove','List All the note',{
				title : titleObj
			})
			.help('help','h')
			.argv;

if(command==='list'){
	var notes = note.allNote();
	console.log('---All Note--- total :', notes.length);
	notes.forEach((notes2)=>{
		note.displayResult(notes2);
		console.log('-----');
	});
}else if(command==='add'){
	var notes = note.addNote(argv.title,argv.body);
	if(notes){
		console.log('--- Inserted Note ---');
		note.displayResult(notes);
	}else{
		console.log('Title Already Exist !!');
	}
}else if(command==='read'){
	var readNote = note.readNote(argv.title);
	if(readNote){
		console.log('--- Read Note ---');
		note.displayResult(readNote);
	}else{
		console.log('Note Not Found !!!');
	}
}else if(command==='remove'){
	note.noteRemove(argv.title);
	console.log('Note Deleted !!!');
}else{
	console.log('Invalid Command');
}
