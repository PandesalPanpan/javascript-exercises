const add = function(...nums) {
	return nums.reduce((sum, number) => sum + number, 0);
};

const subtract = function(...nums) {
	return nums.reduce((difference, number) => difference - number);
};

const sum = function (array) { // The problem was using rest arguments 
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product *= current);
};

const power = function(number, exponent) {
	return Math.pow(number, exponent);
};

const factorial = function(number) {
	let product = 1;
  for (let i = 1; i <= number; i++)
  {
    product *= i;
  }
  return product;
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
