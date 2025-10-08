const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    return arr.reduce((result, currentElement) => result + currentElement, 0);
};

const multiply = function(arr) {
    return arr.reduce((result, currentElement) => result * currentElement, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let result = 1;
    for (let i = num; num > 0; num--) {
        result *= num;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
