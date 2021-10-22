/*
Calculate the average of the 
numbers in an array of numbers
Example array:
[1, 3, 9, 15, 90]

*/
const arr = [1, 3, 9, 15, 90];

let average = 0;


for (let i = 0; i < arr.length; i++) {
    average += arr[i] / arr.length;
}

console.log(average);
