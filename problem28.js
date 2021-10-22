/*
Create a function that will receive an array of 
numbers as argument and will return a new 
array with distinct elements
*/

const arr = [1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9];
const arr1 = [10, 10, 20];

const distinctNum = (arr) => {
  const newArr = [];
  const newArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    } else {
      newArr2.push(arr[i]);
    }
  }
  return newArr2;
};

const r1 = distinctNum(arr1);
console.log(...r1);
