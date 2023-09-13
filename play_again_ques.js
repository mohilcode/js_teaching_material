//write a program to to take age as input and also confirm if they wanna play again, print if the user can or can not drive.

let b = true;
while(b){
    age = prompt("Enter your age:")
    age = Number.parseInt(age)
    const canDrive = (age) =>{
        return age>18?true:false
    }

    if(canDrive(age)){
        alert("You can drive")
    }
    else{
        alert("You can not Drive")
    }

    b = confirm("wanna play again?")
    console.log(b);
}

