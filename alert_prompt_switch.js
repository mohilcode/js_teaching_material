// prompt and alert

// let a = prompt("Hey whats your age") (takes an input, will run in browser)
// let a = "hello"
let a = 69;
console.log(typeof a)
a = Number.parseInt(a);
console.log(typeof a);
if(a>0){
	// alert("This is a valid age") (gives an alert, will run in browser)
	console.log("This is a valid age");
}

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
