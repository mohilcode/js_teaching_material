let name = "harry"
console.log(name.length)
let friend = 'Prakash'
console.log(friend)

// Template Literals

let boy1 = "Pramod"
let boy2 = "Nikhil"
//Nikhil is a friend of Pramod
let sentence = `boy 1 is a friend of boy2`
let sentence1 = `${boy1} is a friend of ${boy2}`
console.log(sentence1)

let first = "helloboy"

console.log(first.toUpperCase())
console.log(first.toLowerCase())

console.log(first.slice(2, 4))
console.log(first.slice(2)) // print from 2 to end
console.log(first.replace("hello","bye"))
let second = "byegirl"
console.log(first.concat(second))
console.log(first) // String is immutable, it can't be changed
let friend2 = "         meena             "
console.log(friend2.trim())

console.log("har\"".length)

const word = "friend"

console.log(sentence.includes(word) ? 'is' : 'is not');

let statement = "Please give me Rs 1000"

for(let i = 0; i < statement.length; ++i) {
	if (!isNaN(statement[i])){
		console.log(statement[i]);// will print individually tho
	}
}


