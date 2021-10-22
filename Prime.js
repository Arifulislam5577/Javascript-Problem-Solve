//All prime Number where you need

const FavouritePrime = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  const arrPrime = [];
  for (let i = 0; i < arr.length; i++) {
    function isPrime(el) {
      if (el < 2) return false;
      let maxDiv = Math.sqrt(el);
      for (let i = 2; i <= maxDiv; i++) {
        if (el % i === 0) return false;
      }
      return arrPrime.push(el);
    }
    isPrime(arr[i]);
  }

  return arrPrime;
};

const r1 = FavouritePrime(1, 100);
const r2 = FavouritePrime(10, 13);

console.log(r1);
