let num = [3,54,1,2,4]
let newArr = num.map((value, idx, arr)=>{
	console.log(value, idx, arr)
	return value+idx // map performs operations on the new array
})
console.log(newArr)
console.log(num)

let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((a)=>{//creates a new array
	return a<10
})
console.log(a2)

let arr3 = [1,2,3,4,5,8,1]
let newArr3 =arr3.reduce((h1,h2)=>{
	return h1+h2
})
console.log(newArr3)
