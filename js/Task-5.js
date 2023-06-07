
//Create a function that will be able to convert figures from Fahrenheit to Celsius.

function convertToFahrenheit(celsius) {
  var celsiusTemp = celsius;
  var celsiusToFahr = celsiusTemp * 9 / 5 + 32;
  var message = celsiusTemp + '\xB0C is' + celsiusToFahr.toFixed(2) + '\xB0F.';
  console.log(message);
}
//
function fahrenheitTocelsius(fahrenheit) {
  var fahrenheitTempreture = fahrenheit;
  var fahrenheitTocelsius = (fahrenheitTempreture - 32) * 5 / 9;
  var message = fahrenheitTempreture + '\xB0F is' + fahrenheitTocelsius.toFixed(2) + '\xB0C.';
  console.log(message);
}

convertToFahrenheit(70);
fahrenheitTocelsius(30);

//output 158OF
//output -1.11OC

