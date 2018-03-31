
const fs=require('fs');
var fetchNotes=()=>{
		try
	{
	var notesstring=fs.readFileSync('notes-data.json');
	//this line will throw an error when file doesn't exists/no data
	return JSON.parse(notesstring);
	//corrupted data
    }
    catch(e)  //runs only when try has error
    {
return [];
    }

};

var saveNotes=(notes)=>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));

};

var addNotes=(title, body)=>{
	var notes=fetchNotes();
	var note={
		title,   //title=title
		body
	};

    var duplicateNodes=notes.filter((note)=>{
       return note.title===title;
    });
       //This is also valid
       // var duplicateNodes=notes.filter((note)=>
       // return note.title===title);
    //checks if present title is not repeated
    if(duplicateNodes.length==0)
    {
    	notes.push(note);
	saveNotes(notes);
	return note;
    }
	
}
var removeNote=(title)=>{
	var notes=fetchNotes();
	filternotes=notes.filter((note)=>{
		return note.title!=title;
			});
	saveNotes(filternotes);
	return notes.length!=filternotes.length; //check if deleted
	
};
var getAll=()=>{
return fetchNotes();
}
var getNote=(title)=>{
	var notes=fetchNotes();
	filtered=notes.filter((note)=>note.title==title);
	return filtered[0];
}
var logNote=(note)=>
{
	console.log("--");
console.log(`title : ${note.title}`);
console.log(`body : ${note.body}`);
}
module.exports={
	addNotes,
	getAll,
	removeNote,
	getNote,
	logNote
}


