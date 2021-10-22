// Reverse a string

//first way

const str = "Bangladesh";

const strReverse = (str) => {
  return str.split("").reverse().join("");
};

const r1 = strReverse("Javascript");
console.log(r1);

//second way

const strReverse2 = (str) => {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let el = str[i];
    newStr += el;
  }
  return newStr;
};
