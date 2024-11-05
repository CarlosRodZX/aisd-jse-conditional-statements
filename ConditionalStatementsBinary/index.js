// Using 'if' to check a condition 
let weather = 'sunny';

if (weather === 'rainy') {
  console.log("Take an umbrella"); // Expected Output: "Take an umbrella!"


} else {
  console.log("Enjoy the sunshine!"); // Expected Output: "Enjoy the Sunshine!"
}


weather = 'sunny'

if (weather === 'sunny') {
  console.log("Wear sunglasses!"); // Expected output: "Wear sunglasses!"

}

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)


}


// Comparison Operators 

let age = 18;
let minimumDrivingAge = '18';

console.log(age == minimumDrivingAge); // true (loose equality, checks value only)

console.log (age === minimumDrivingAge); // false (strict equality, checks value and type)

// Using typeof to check the data types 

console.log(typeof age); // "number"

console.log (typeof minimumDrivingAge); // "string"

// More comparisons 
console.log (age != minimumDrivingAge); // false (loose inequality, checks value only)

console.log(age !== minimumDrivingAge); // true (strict inequality, checks value and type)

// Additional examples with greater than and less than

let personAge = 20;
let requiredAge = 18;

console.log(personAge > requiredAge); // true (20 is greater than 18)

console.log(personAge < requiredAge); // false (20 is not less than 18)

console.log(personAge >= requiredAge); // true (20 is greater than or equal to 18)

console.log(personAge <= requiredAge); // false (20 is not less than or equal to 18)

// Truthy and Falsy Values Examples

age = 18; 
minDrivingAge = '18';

// Comparison Operator with Strict Equality

if (age === minDrivingAge) {
  console.log("The ages are strictly equal"); // Expected Output: (This will not print because the condition is false)

} else {
  console.log("The ages are not strictly equal."); // Expected output: "The ages are not strictly equal."

}

// Checking if a user input is truthy or falsy
let userInput; 

if (userInput) {
  console.log("User input is truthy");
}