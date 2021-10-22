// // Print all the multiplication tables with numbers from 1 to 10




//-------------> Functional Way

// const multiplicationTables = (num) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// };

// console.log("Multiplication 1");
// multiplicationTables(1)
// console.log("Multiplication 2");
// multiplicationTables(2)
// console.log("Multiplication 3");
// multiplicationTables(3)
// console.log("Multiplication 4");
// multiplicationTables(4)
// console.log("Multiplication 5");
// multiplicationTables(5)
// console.log("Multiplication 6");
// multiplicationTables(6)
// console.log("Multiplication 7");
// multiplicationTables(7)
// console.log("Multiplication 8");
// multiplicationTables(8)
// console.log("Multiplication 9");
// multiplicationTables(9)
// console.log("Multiplication 10");
// multiplicationTables(10)




//---------------> Looping Way

// for (let i = 1; i <= 10; i++){
//     printTable(i);
    
// }

// function printTable(n) {
//     for (let i = 1; i <= 10; i++){
//         let row = `${n} * ${i} = ${n * i}`
//         console.log(row)
//     }
// }





//--------------Shortcut Ways

for (let i = 1; i <= 10; i++){
    console.log(`Multiplication Table ${i}`);
    for (let j = 1; j <= 10; j++){
        
        console.log(`${i} * ${j} = ${i*j}`)
    }
}