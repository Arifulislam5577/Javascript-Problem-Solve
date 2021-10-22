// Print the first 100 prime numbers

function hundredPrime(number) {
  let prime = 2;
  let count = 0;

  while (count < number) {
    if (isPrime(prime)) {
      console.log(`${count} --> ${prime}`);
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
}

hundredPrime(100);
