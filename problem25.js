/*
Create a function that will receive 
two arrays of numbers as arguments 
and return an array composed of 
all the numbers that are either 
in the first array or second array 
but not in both

*/

const arr1 = [10, 20, 30, 40, 50, 60];
const arr2 = [70, 80, 90, 100, 30, 40, 50];

const uniqueArr = (arr1, arr2) => {
  const unArr = [];

  const newArr = [...arr1, ...arr2];

  for (let i = 0; i < newArr.length; i++)
    if (!unArr.includes(newArr[i])) unArr.push(newArr[i]);

  return unArr;
};

const r1 = uniqueArr(arr1, arr2);
console.log(r1);
