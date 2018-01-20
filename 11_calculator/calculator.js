function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	if (array.length == 0) {
		return 0;
	} else {
		var reducer = (accumulator, currentValue) => accumulator + currentValue;
		return array.reduce(reducer);
	}
}

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}