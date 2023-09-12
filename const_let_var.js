
// JS is dynamically typed, can change type of any variable

var a = 45;
var b = "Mohil"; // globally scoped (isnt used much), can be declared again and also updated
const a = 6; // can't be declared or updated, use most of the time
{
	var b = "this";
	console.log(b);
}

console.log(b);

let c = "Mohil";
{
	let c = "this" // let is block-scoped, can be updated but can not be declared again
	console.log(c);
}

console.log(c);

