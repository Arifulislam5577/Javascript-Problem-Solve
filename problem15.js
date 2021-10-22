//Find the maximum number
// in an array of numbers

const arr = [10, 20, -30, -40, 40, -50, 100, 60, 70, 80, 90];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element > max) max = element;
}

console.log(max);
