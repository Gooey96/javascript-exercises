const add = function(num1, num2) {
	return (+num1) + (+num2);
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((value, nums) => value + nums, 0);
};

const multiply = function(array) {
  return array.reduce((value, nums) => value * nums);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let value = 1;
  for (let i = num; i > 0; i--) {
    value *= i;
  }
  return value;
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
