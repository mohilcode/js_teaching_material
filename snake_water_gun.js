const swg = () => {
    let a = Math.random();
    if (a <= 0.33) {
        return "snake";
    } else if (a > 0.33 && a <= 0.66) {
        return "water";
    } else {
        return "gun";
    }
}

const game = (user, computer) => {
    if (user === computer) {
        return `Both chose ${user}. It's a tie!`;
    }
    if (user === "snake" && computer === "water" || 
        user === "gun" && computer === "snake" || 
        user === "water" && computer === "gun") {
        return "You Won";
    } else {
        return "You Lost";
    }
}

let play = true;
while (play) {
    let computer = swg();
    let userInput = prompt("Snake, Water or Gun?").toLowerCase();

    if (["snake", "water", "gun"].includes(userInput)) {
        let result = game(userInput, computer);
        alert(`I chose ${computer}. ${result}`);
        play = confirm("Do you want to play again?");
    } else {
        alert("Invalid choice! Please choose either Snake, Water, or Gun.");
    }
}
