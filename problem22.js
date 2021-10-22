// Reverse an array

const arr = [5, 4, 3, 2, 1];

//Way -1

// console.log(arr.reverse());

//way -2
const newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

console.log(newArr);
