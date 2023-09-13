function getRandom(){
	return Math.floor(Math.random() * 100)
}

let numtoguess = getRandom();

let guess;
let ct = 0;
do{
	guess = prompt("Enter your number: ")
	guess = Number.parseInt(guess)
	if(guess > numtoguess) {
		alert("Your number is greater")
	}
	else if(guess < numtoguess) {
		alert("Your number is smaller")
	}
	ct++
} while(guess != numtoguess )

alert("Your number is correct")

let score = 100 - ct;
alert(`your score is: ${score}`)
