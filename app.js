// Q1 numbers from1to10
// // for (var i = 1; i <= 10; i++) {
// //     console.log(i);
//   }
//   Q2 Write a loop to print even numbers from 1 to 20.
// for(var even = 2; even <= 20; even++2){
//     console.log(even)
// }
// Q3 Write a loop to print odd numbers from 1 to 15
// for(var odd = 1; odd <=15; odd++2){
//   console.log(odd)
// }
// Q4 Write a loop to calculate and print the factorial of a number (let's say 5).
// function factorial(num) {
//   if (num < 0) {
//     return "Factorial is not defined for negative numbers";
//   } else if (num === 0) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }

// const number = 5;
// const fact = factorial(number);
// console.log(`The factorial of ${number} is ${fact}`);
// Q5 Write a loop to print the multiplication table of a number (let's say 7) up to 10.
// for (let i = 1; i <=10; i++) {
//  console.log(i*7)
// }
//print table of 4 from 1 to 10 class work
// for (var i = 1; i <= 10; i++) {
//   console.log(i * 4);
// }
// Q6 Write a loop to print the Fibonacci series up to the 10th term.

// function fibonacci(n) {
//   // Initialize variables for the first two terms
//   let a = 0;
//   let b = 1;

//   // Loop for n terms
//   for (let i = 0; i < n; i++) {
//     console.log(a);
//     // Calculate the next term
//     let c = a + b;
//     // Shift values for the next iteration
//     a = b;
//     b = c;
//   }
// }
// const terms = 10; // Print up to the 10th term
// fibonacci(terms);
// Q7 Write a loop to find and print the sum of digits of a number (let's say 123).
// function sumOfDigits(num) {
//   let sum = 0;
//   // Handle negative numbers (make them positive for digit extraction)
//   num = Math.abs(num);

//   while (num > 0) {
//     // Extract the last digit and add it to the sum directly
//     sum += num % 10;
//     // Remove the last digit by integer division
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// const number = 123;
// const digitSum = sumOfDigits(number);
// console.log(`The sum of digits in ${number} is ${digitSum}`);

// Q8 Write a loop to print the reverse of a string (let's say "hello")

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// const string = "hello";
// const reversedString = reverseString(string);
// console.log(`The reversed string is: ${reversedString}`);
// // Q9 Write a loop to print the square of numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i * i);  // Square the number directly in the loop
// }
// // Q10 Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).
// const numbers = [3, 7, 2, 9, 5];
// let largest = numbers[0];  // Start with the first element as a placeholder

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

// console.log("The largest element is:", largest);
  // Q23 EXECTION ARRAY TO FORLOOP CHANGE
  var weekDay =['mon','tue','wen','thus','frid','sat','sun',]
for(var i = 0; i = 7; i++){
  console.log(weekDay [i])
  }
console.log(weekDay.length)