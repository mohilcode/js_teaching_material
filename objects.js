
const a = {
	name: "Harry",
	section: 1,
	isPrincipal: false
}

a['friend'] = "Shubham" //can do this because const a just points to the object so you can add anything new 
a['name'] = "Mohil" // can change or update also
console.log(a); 
console.log(a.name);
console.log(a['name']);
