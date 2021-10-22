// Calculate the sum of digits of a positive integer number

function intNumSum(num) {
  const numArr = num.toString().split("");
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    let el = numArr[i];
    sum += Number(el);
  }

  console.log(sum);
}

intNumSum(13232434);
