// Print the distance between the first 100 prime numbers

function hundredPrime(number) {
  let prime = 2;
  let count = 0;
  const arr = [];
  const arr2 = [];

  while (count < number) {
    if (isPrime(prime)) {
      arr.push(prime);
      count++;
    }
    prime++;
  }

  function isPrime(prime) {
    if (prime < 2) return false;
    const maxDiv = Math.sqrt(prime);

    for (let i = 2; i <= maxDiv; i++) {
      if (prime % i === 0) return false;
    }
    return true;
  }
  isPrime(prime);
  for (let i = 0; i < arr.length - 1; i++) {
    arr2.push(arr[i + 1] - arr[i]);
  }
  return arr2;
}

const r1 = hundredPrime(100);

console.log(r1);


