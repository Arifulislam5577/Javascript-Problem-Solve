/*
Print the first 10 Fibonacci numbers 
without using recursion.
Reminder:
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)


*/

let f0 = 0;
let f1 = 1;
for (let i = 2; i <= 10; i++) {

    fi = f1 + f0;
    console.log(fi);
    f0 = f1;
    f1 = fi;
}