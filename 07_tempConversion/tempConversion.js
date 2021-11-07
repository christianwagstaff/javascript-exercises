const ftoc = function(temp) {
  let celsius;
  celsius = (temp - 32) * (5/9);
  rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const ctof = function(temp) {
  let farenheit;
  farenheit = (temp * 9 / 5) + 32;
  rounded = Math.round(farenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
