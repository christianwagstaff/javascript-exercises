const add = function(a,b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return parseInt(a) - parseInt(b);
};

const sum = function(a) {
	const sumReducer = (previousValue, currentValue) => previousValue + currentValue;
  if (a.length === 0) return 0;
  return a.reduce(sumReducer);
};

const multiply = function(a) {
  const multReducer = (previousValue, currentValue) => previousValue * currentValue;
  return a.reduce(multReducer);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
	for (let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
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
