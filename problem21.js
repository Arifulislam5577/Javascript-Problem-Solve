// Rotate an array to the right 1 position

const arr = [5, 4, 3, 2, 1];

const rotateArr = (arr) => {
  const posOne = arr.pop();
  arr.unshift(posOne);
};

rotateArr(arr);

console.log(arr);
