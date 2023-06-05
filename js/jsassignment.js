
//Create a function that will be able to convert figures from Fahrenheit to Celsius.

function convertToFahrenheit(celsius){
    var celsiusTemp = celsius;
    var celsiusToFahr = celsiusTemp * 9 / 5 + 32;
    var message = celsiusTemp+'xB0C is' + celsiusToFahr + '\xB0F.';
     console.log(message);
   }
   
   function fahrenheitTocelsius(fahrenheit)
   {
     var fahrenheitTempreture = fahrenheit;
     var fahrenheitTocelsius = (fahrenheitTempreture - 32) * 5 / 9;
     var message = fahrenheitTempreture+'\xB0F is' + fahrenheitTocelsius + '\xB0C.';
     console.log(message);
   }
   
   convertToFahrenheit(70);
   fahrenheitTocelsius(30);
   
   //output 158OF
   //output -1.11OC

//Create a function that will calculate the average of numbers in an array.
const arr = [11, 1, 19, 14, 15];

var sum = 0;

for (var number of arr) {
    sum += number;
}

average = sum / arr.length;

console.log(average);

//answer (12)


//Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible (n, x, y){

    return n % x === 0 && n % y === 0; 
}


//isDivisible(50,2,20) ~ false 
//isDivisible(100,2,2) ~ true 

//Create a function that will output the first 100 prime numbers.

function generatePrimes(count) {
    var primes = [];
    var number = 2;
    while (primes.length < count) {
        if (isprimes(number)) {
            primes.push(number);
        }
        number++;
    }

    return primes;
}

function isPrime(number){
    if (number <= 1) {
        return false;
    }

    for (let p = 2; p <= Math.sqrt(number); p++) {
        if (number % p ===0) {

            return false;
        }
    }

    return true;
}

var primes = generatePrimes(100);
console.log(primes);
//Output [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541]

//Create a function that will return a boolean specifying if a number is a prime number.

function getPrimes (n){
    
    let primes = [];
        let j = 2;
            while (primes.lenght < n); {

                if (isprimes (j)) {
                    primes.push(j);
                }

                j++;
            } 
           
            return primes;

}

function isprimes(num) {

    for (let j = 2; j < num; j++)
    if (num % j === 0) return false;
    return num !== 1;
}

//getPrimes (45) ~ [2]
//isPrimes (true)

//Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function getPositiveNumbers(number) {
    
    let positiveNumbers = [];

    for (let x = 0; x < number.length; x++) {
        if (numbers[x] > 0 ) {
            positiveNumbers.push(number[x]);
            }
        } 
        return positiveNumbers;
    } 
    
let numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9];
let positiveNumbers = getPositiveNumbers(numbers);

console.log(positiveNumbers)
//output 

//Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }


//The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the
  
  function generateHashtag(str) {
    // Check if input is empty or result would be too long
    if (str === "" || str.trim() === "") {
      return false;
    }
    
    // Remove spaces and split the string into words
    var words = str.split(" ").filter(function(word) {
      return word !== "";
    });
    
    // Capitalize the first letter of each word and join them with no spaces
    var hashtag = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");
    
    // Add the hash symbol at the beginning

    hashtag = "#" + hashtag;
    
    // Check if the result is longer than 140 characters

    if (hashtag.length > 140) {
      return false;
    }
    
    return hashtag;
  }

  var input = "Happy web development day.";
  var hashtag = generateHashtag(input);
  console.log(hashtag);

//output #happywebdevelopmentday.