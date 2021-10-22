/*
Create a function that will receive 
two arrays and will return an array 
with elements that are in the first 
array but not in the second
*/
const arr1 = [1, 2, 3, 10, 5, 3, 14];
const arr2 = [-1, 4, 5, 6, 14];

const matchFirstArr = (arr1, arr2) => {
  const arr = [];

  const newArr = [...arr1, ...arr2];

  //   for (let i of arr1) {
  //     if (!arr2.includes(i)) arr.push(i);
  //   }

  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    if (!arr2.includes(element)) arr.push(element);
  }

  return arr;
};

console.log(matchFirstArr(arr1, arr2));
