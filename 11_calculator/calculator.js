function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function multiply (array) {
	return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	if (num == 0) {
		return 1;
	} else {
		return (num * factorial(num-1));
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}