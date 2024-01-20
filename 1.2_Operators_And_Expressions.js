// Operators and Expressions

// Operators:
// 1] Assignment Operators
console.log("1] Assignment Operators:- ");
let a = 6
let b = 4

console.log("a+b  = ", a+b);
console.log("a-b  = ", a-b);
console.log("a*b  = ", a*b);
console.log("a**b = ", a**b); //a^b ie 6^4 = 6x6x6x6
console.log("a/b  = ", a/b);
console.log("a%b  = ", a%b);  // gives remainder

console.log(" ")

console.log("a++  = ", a++)  // First prints the value as it is than adds 1
console.log("a    = ", a)
console.log("++a  = ", ++a)  // first adds 1 than prints the value
console.log("a    = ", a)

console.log(" ")

console.log("b--  = ", b--) // First prints the value as it is than subtracts 1
console.log("b    = ", b)
console.log("--b  = ", --b) // First subtracts 1 than prints the value
console.log("b    = ", b)

console.log(" ");

//2] Assignment Operators
console.log("2] Assignment Operators:- ");
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", a)

console.log(" ");
//3] Comparison Operators
console.log("3] Comparison Oparators:- ");
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is  ", comp1 == comp2) // checks if  value is same --> 6 and '6' will be same
console.log("comp1 != comp2 is  ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2) //checks if value as well as the type --> 6 and '6' wont be same
console.log("comp1 !== comp2 is ", comp1 !== comp2) 
console.log("comp1 > comp2 is   ", comp1 > comp2)

console.log(" ");
//4] Logical Operators
console.log("4] Logical Operators:- ");
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

