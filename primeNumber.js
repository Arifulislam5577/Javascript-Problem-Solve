// Check Prime number

// function isPrime(n) {
//   if (n < 2) return "Not Prime";
//   if (n == 2) return "Prime";

//   let maxDiv = Math.sqrt(n);
//   for (let i = 2; i <= maxDiv; i++) {
//     if (n % i === 0) return "Not Prime";
//   }
//   return "Prime";
// }

// const prime = isPrime(144);

// console.log(prime);

function printPrime(nprime) {
  let n = 0;
  let i = 2;

  while (n <= nprime) {
    if (isPrime(i)) {
      console.log(`${n} --> ${i}`);
      n++;
    }
    i++;
  }
}

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;

  let maxDiv = Math.sqrt(n);
  for (let i = 2; i <= maxDiv; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

printPrime(100);
