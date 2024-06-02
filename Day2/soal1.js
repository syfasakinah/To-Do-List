// convert Celcius to Fahrenheit

let celcius = 60
let fahrenheit = 140


const celciusToFahrenheit = celcius * 9 / 5 + 32;
const fahrenheitToCelcius = (fahrenheit - 32) * 5 / 9;

const messageCelciusToFahrenheit = `${celcius} \xB0C is ${celciusToFahrenheit} \xB0F.`;
const messageFahrenheitToCelcius = `${fahrenheit} \xB0F is ${fahrenheitToCelcius} \xB0C.`;

console.log(messageCelciusToFahrenheit)
console.log(messageFahrenheitToCelcius)