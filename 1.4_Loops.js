// Loops in Js
// Run the codes in browser if they don't work

// for loop
console.log(" for loop:- ");
let num = prompt("Enter the no. you want of which you want factorial of: ");
num = parseInt(num);

let factorial = 1;
for(let i = 1; i<= num; i++){
    factorial *= i;
}
alert('Factorial of ' + num + " is " + factorial);
console.log(" ")


// for in loop
console.log(" for-in loop:-");
let myObj = {
    Luffy : 3000000000,
    Zoro  : 1111000000,
    Sanji : 1032000000,
    Jinbe : 1100000000
}
for(let strawHats in myObj){
    console.log(strawHats);
    console.log("Bounty of "+ strawHats + " is " + myObj[strawHats]);
}
console.log(" ");

console.log("while loop:- ");
// while loop
let a = 1
while(a<=10){
console.log(a);
a++
}
console.log(" ");

console.log("do while loop:-");
// do while loop
let b = 1
do{
    console.log(b);
    b++
}
while(b<=10)
