// Functions in Js
// There are 2 ways of declaring functions

// Using Arrow function
const sum = (a,b)=>{
    let c = a+b;
    return c;
}
console.log(sum(5,6));

// Using function keyword
function average(a,b,c){
    let sum = a+b+c;
    console.log(sum/3);
}
average(4,6,8)