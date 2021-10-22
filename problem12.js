/*Create a function that receives an 
array of numbers and returns an 
array containing only the positive 
numbers.


Requ: For Loop
*/


const arr = [10, 20, -30, -40, 40, -50, 100, 60, 70, 80, 90];


const positiveArr = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0)
         newArr.push(arr[i])  
    }
    return newArr;
}


const r1 = positiveArr(arr);

console.log(r1)