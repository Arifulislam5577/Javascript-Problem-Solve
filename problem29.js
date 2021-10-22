// Calculate the sum of first 100 prime numbers

const firstHundredPrime = (number) => {
  let count = 0;
  let prime = 2;
  let sum = 0;

  const isPrime = (prime) => {
    if (prime < 2) return false;
    let maxDiv = Math.sqrt(prime);
    for (let i = 2; i <= maxDiv; i++) {
      if (prime % i === 0) return false;
    }
    return true;
  };

  while (count < number) {
    if (isPrime(prime)) {
      sum += prime;
      count++;
    }
    prime++;
  }
  return sum;
};

const r1 = firstHundredPrime(100);
console.log(r1);
