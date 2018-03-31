// var obj=
// {
// 	name:'Andrew'
// };
// var stringObj=JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString='{"name":"Andrew", "age":25}';
// var person =JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs=require('fs');
var originalNote={
	title:"Some title",
	body:"some body"
};
var originalNoteString=JSON.stringify(originalNote);
//write to file
fs.writeFileSync('notes.json',originalNoteString);
//(filename,textcontent)

//read from file
var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
