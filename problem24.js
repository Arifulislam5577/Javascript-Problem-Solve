// Create a function that will merge two arrays  and return the result as a new array

//Traditional way

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const margeArr = (arr1, arr2) => {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr;
};

const r1 = margeArr(arr1, arr2);

console.log(r1);

//Modern Way

const newArr2 = arr1.concat(arr2);

console.log(newArr2);

//More Modern Way

const newArr3 = [...arr1, ...arr2];

console.log(newArr3);
