// Create a function that will convert from Celsius to Fahrenhe
// C = F – 32 / 1.8
// F = C * 1.8+ 32

const cTof = (C) => {
  console.log(`F = ${(C * 9) / 5 + 32}`);
};

cTof(100);
cTof(20);
