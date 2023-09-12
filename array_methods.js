let a = [1, 2, 3, 4, false, "not present"]
console.log(a)
console.log(a[6])
console.log(a.length)
a[6] = 6
a[0] = 5
console.log(a)
console.log(typeof(a))

let num = [1,2,3,34,4]
let b = num.toString()//converts array to string
console.log(b)
let c = num.join("_")
console.log(c, typeof c)
num.pop() // changes the existing array
console.log(num)

let num1 = [1,2,3,4,5,6,7,8,9]
delete num1[0]
console.log(num1)
console.log(num1.length)
 let newArray = num.concat(num1) // can add multiple nums inside
 console.log(newArray)

 //sort method

 let num3 = [2,4,6,22,7,8,3,1,2]
 num3.sort()//changes the original array, alphabetically (not ascending)
 console.log(num3)
let compare = (a,b)=>{
	return a - b// does ascending
 }
num3.sort(compare) 
console.log(num3)

num3.reverse() //reverses the order

//splice and slice
let x = num3.splice(2,3,21,23,24) // starts from 2, 3 elements deleted, 3 new added(can add more)
console.log(x, num3) // x returns the deleted values

let newNum = num3.slice(3,5) // creates a new array
console.log(newNum)
