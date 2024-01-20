// Conditional statements
// Try these codes in browser, might not work in your system editor

//if else statements
let age = prompt("Enter your age: "); //Gives a string as an output 

age = Number.parseInt(age); // converts string into number
if (age<0 || age> 120){
    alert("Invalid age");
}
else if(age<18){
    alert("You cannot drive");
}
else{
    alert("You can drive")
}
console.log(" ")

console.log("switch statement:- ");
//switch Statement
let marks = prompt("Enter your marks: ") 
  
let Branch; 
  
switch (true) { 
    case marks >= 90: 
        Branch = "Computer science engineering"; 
        break; 
    case marks >= 80: 
        Branch = "Mechanical engineering"; 
        break; 
    case marks >= 70: 
        Branch = "Chemical engineering"; 
        break; 
    case marks >= 60: 
        Branch = "Electronics and communication"; 
        break; 
    case marks >= 50: 
        Branch = "Civil engineering"; 
        break; 
    default: 
        Branch = "Bio technology"; 
        break; 
} 
  
alert(`Student Branch name is : ${Branch}`);

console.log(" ")

// Ternary Operator
console.log("Ternary Operator:- ");
age = 31
//             if this is true     print this          otherwise this
const result =    (age>18)?      "you Can drive" :   "You Cannot Drive"