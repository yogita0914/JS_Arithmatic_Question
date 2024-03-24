// 1.Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b
let a = 4;
let b = 7;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);
console.log("Modulus:", a % b);

// 2.Take two numbers and only print the integer part when a is divided by b.
let x = 10;
let y = 8;
let z = Math.floor(x/y);
console.log('integer part:', z);

// 3.Take two numbers a,b and print the exponential power of the first number raised by the second
let m1 = 7;
let n1 = 3;
console.log('exponential is:',m1**n1);

// 4.Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b
let d = 5;
let e = 2;
console.log('decimal is:', d/e);

// 5.Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks
let i = 15;
let j = 10;
let k = 12;
let l = 25;
let m = 20;
let avg = i + j + k + l + m 
console.log('average', avg/5);

// 6.Take the cost price a and selling price b of a product, and print the profit obtained on the product
let sp = 30;
let cp = 12;
console.log('profit', sp - cp);

// 7.Take a number and print out the last digit of the number.
let n = 45;
console.log('last digit', n % 10);

// 8. Take a 2 digit number and return the first and last digits.
let digit = 10;
let a1 = Math.floor(digit / 10);
let b1 = digit % 10;
console.log('first number', a1, 'last number', b1);

// 9. Write a JavaScript program to find the largest of three numbers.
let g = 6;
let h = 12;
let c = 7;
if (g > h && g > c){
    console.log('g is largest', g);
}
else if (h > g && h > c){
    console.log('h is largest', h);
}
else{
    console.log('c is largest', c);
}

// 10. Write a JavaScript program to check whether a number is even or odd.
let num = 12;
if (num % 2 == 0){
    console.log('This is even', num);
}
else{
    console.log('This is odd', num);
}

// 11. Write a JavaScript program to check whether a given number is prime or not.
let prime_num = 63;
let count = 0;
for (let i = 2; i <= prime_num; i++){
    if (prime_num % i == 0){
        count++;
    }
}
if (count == 2){
    console.log('This is prime number', prime_num);
}
else{
    console.log('This is not prime number', prime_num);
}

// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa
let cel = 36;
let fah = 24;
console.log('Celsius to Fahrenheit', (cel * 9/5) + 32);
console.log('Fahrenheit to Celsius', (fah - 32) * 9/5);