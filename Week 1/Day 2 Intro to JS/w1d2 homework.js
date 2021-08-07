// The Fortune Teller
TheFortuneTeller:";

var numKids = 2;
var partner = 'Rocket Man'; 
var geolocation = 'New Orleans';
var jobtitle = 'Penetration Tester';

// “You will be a X in Y, and married to Z with N kids.”
var future = 'You will be a ' +jobtitle + ' in ' +geolocation + ', and married to ' +partner + ' with ' +numKids + ' kids.'
console.log(future);

// "The Age Calculator:";
var birthYr = 1973;
var futureYr = 2066;
var age = futureYr - birthYr;
console.log(age);
console.log('They are either ' + age + ' or ' + (age - 1));

// "The Lifetime Supply Calculator - brownies;";
var currentAge = 48;
var maxAge = 120;
var cookiesPerday = 3;
var total4life = (cookiesPerday * 365) * (maxAge - currentAge);
console.log(total4life)

// “You will need NN to last you until the ripe old age of X”

var message = 'You will need ' +total4life + ' brownies to last you until the ripe old age of ' +maxAge;
console.log(message);

"The Geometrizer:";
var radius = 15;
var pi = 3.14159;
var circumference = pi * 2 * radius;
var area = pi * radius * radius;
console.log(circumference)
console.log(area)

// “The circumference is ”
//  “The area is ”

console.log("The circumference is " +circumference);
console.log("The area is " + radius + radius * pi);
 
//  "The Temperature Converter"
 function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius*9)/5 + 32;
    console.log(celsius + '°C is ' + celsiusInF + '°F');
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
  }
celsiusToFahrenheit(50)
fahrenheitToCelsius(85)




