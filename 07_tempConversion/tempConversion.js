const convertToCelsius = function(fahrenheit) {

  const celsiusDegrees = ((fahrenheit - 32) * 5/9);
  return Math.round(celsiusDegrees * 10) / 10;

};

const convertToFahrenheit = function(celsius) {

  fahrenheitDegrees = (celsius * 9/5 + 32);
  return Math.round(fahrenheitDegrees * 10) / 10;

};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
