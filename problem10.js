/*
Calculate the sum of numbers 
in an array of numbers.
Example array:
[2, 3, -1, 5, 7, 9, 10, 15, 95

*/

const arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
