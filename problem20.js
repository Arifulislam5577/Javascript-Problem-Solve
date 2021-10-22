// Rotate an array to the left 1 position

const arr = [5, 4, 3, 2, 1];

const rotateArr = (arr) => {
  const posOne = arr.shift();
  arr.push(posOne);
};

rotateArr(arr);

console.log(arr);
