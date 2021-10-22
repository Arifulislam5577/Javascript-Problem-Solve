/*
Create a function that will receive an array of 
numbers as argument and will return a new 
array with distinct elements

*/

// const arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, 100, -20, -20];

// function getDistinctNum(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!isInArray(arr[i], newArr)) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// function isInArray(n, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(getDistinctNum(arr));

//Traditional Way

// const arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, 100, -20, -20];
// const arr1 = [10, 20, 10, 20, 30, 30];

// const distictNumber = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) newArr.push(arr[i]);
//   }
//   return newArr;
// };

// const r1 = distictNumber(arr);
// const r2 = distictNumber(arr1);

// console.log(r2);

//More Modern Way

const arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, 100, -20, -20];
3;
const modernWay = (arr) => {
  const newArr = new Set(arr);
  return newArr;
};

const r3 = modernWay(arr);
console.log([...r3]);
