let num = [3,54,1,2,4]

num.forEach((element)=>{
	console.log(element*element)
})

//Array from
let name = "Harry"
let arr = Array.from(name) // makes an array
console.log(arr)

// for ...of

for(let i of num){ // good method to print element
	console.log(i)
}

for(let i in num){ // gives keys
	console.log(i)
}

