
let sum = 0
let n = 5
n = Number.parseInt(n)

for(let i = 0; i<n; ++i){ // If i use var in this, i will be global scope
	sum += (i+1)
}
console.log(sum);

let obj = {
	harry: 90,
	shubh: 45,
	shivika: 56,
	ritika: 57,
	shv: 23
}
for(let a in obj){ // loops thorugh the keys of an object
	console.log(a, obj[a]);
}

for(let b of "Harry"){ //loops through the values of an object (for arrays)
	console.log(b)
}
