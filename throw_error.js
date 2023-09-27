try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>150){
        throw new ReferenceError("not possible")
    }
} catch (error) {
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}

