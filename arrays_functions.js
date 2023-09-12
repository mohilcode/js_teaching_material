function wordBlanks(myNoun, myAdjective, myVerb, MyAdverb){
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store" + " " + MyAdverb;
	return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

var myArray = ["Quincy", 1];

var nestedArray = [["Bulls", 23], ["White", 45]];
console.log(nestedArray);

var newArray = [50,60,70];

var myData = newArray[0];

newArray[2] = 69;

newArray.push(90);
console.log(newArray);

var removed = newArray.pop();
console.log(removed);

var removed = newArray.shift();
console.log(removed);

let r = newArray.unshift(420);
console.log(r) //  returns new array's length
console.log(newArray);

var myList = [["cereal", 3], ["milk",2], ["bananas",3]]
