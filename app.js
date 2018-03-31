

const yargs=require('yargs');
const notes=require('./notes.js');
//setting up flags eg: we can use -t instead of --title by setting up its alias
const titleOptions={
	describe:'title of note',
		demand: true,
		alias:'t'
	};
	args=yargs.
command('add','Add a note',{ //only for add function
	title:titleOptions,
	body:{
		describe:'body',
		demand:true,
		alias:'b'
	}
})
.command('list','List of nodes')
.command('read','Read a node',{
	title: titleOptions
})
.command('remove','Remove notes',{
	title:titleOptions}).help().argv;
//using help displays this info when you run node app.js --help
console.log('yargs:',args);
console.log('Process:',process.argv);
command=args._[0];
if (command=="list")
{
   var allNotes=notes.getAll();
   allNotes.forEach((note)=>notes.logNote(note));
}
else if (command=="add")
{
 var note=notes.addNotes(args.title, args.body);
 if(!note)    //js returns undefined when return statement was not found
 	console.log("duplicate");
 else
 	notes.logNote(note);
}
else if (command=="remove")
{
var noteRemoved=notes.removeNote(args.title);
var message=noteRemoved?'Note was removed' : 'Note not found';
console.log(message);
}
else if (command=="read")
{
var content=notes.getNote(args.title);
if(content)
notes.logNote(content);
else
console.log("No such note exists");
}