/*

Create a function that receives an 
array of numbers and returns an array 
containing only the positive numbers.


Requirement: Use a “for ... of” loop


*/


const arr = [10, 20, -30, -40, 40, -50, 100, 60, 70, 80, 90];

const positiveArr = (arr) => {
  const newArr = [];
  for (const i of arr) {
    if (i > 0) newArr.push(i);
  }
  return newArr;
};

const r1 = positiveArr(arr);

console.log(r1);