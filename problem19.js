// Create a function that will return in an array the first
// "nPrimes" prime numbers greater than a number "startAt"

const allPrimeNumber = (nPrimes, startAt) => {
  const arr = [];
  for (let i = nPrimes; i <= startAt; i++) {
    arr.push(i);
  }

  const primeArr = [];
  for (let i = 0; i < arr.length; i++) {
    const isPrime = (el) => {
      if (el < 2) return false;
      let maxDiv = Math.sqrt(el);
      for (let i = 2; i <= maxDiv; i++) {
        if (el % i === 0) return false;
      }

      return primeArr.push(el);
    };

    isPrime(arr[i]);
  }

  return primeArr;
};

const r1 = allPrimeNumber(10, 30);

console.log(r1);
