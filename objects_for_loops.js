const marks = {
	harry: 70,
	shiva: 60,
	madhu: 80,
	radhe: 90
}

for(let i = 0; i<Object.keys(marks).length; ++i){
	console.log(Object.keys(marks)[i], marks[Object.keys(marks)[i]])
}

for(let i in marks){
	console.log(i, marks[i])
}

const mean = (a,b,c,d,e) => {
	return (a,b,c,d,e) / 5
}
