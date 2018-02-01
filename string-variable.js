// create variables to hold the name text.
var username;
var message;

//assign values to these variables
username = "rob dog";
message = " yo yo " + username + ' you wanna tustle?';

//get the element with an id of name.
var elName=document.getElementById("name");
//replace the content of this element.
elName.textContent=username;

//get the element with an id of note.
var elNote = document.getElementById("note");
//replace the content of this element.
elNote.textContent=message;



