// variables in Js
// variables in Js are declared using 3 keywords -> var, let or const , each having different scopes
var a = 45
let b = "Luffy"
const c = null
let d = undefined

{
    var a = 'ReDeclaring a'
    let b = 'ReDeclaring b using let'    // allowed
    // var b = 'OverWritten b using var'  // throws error
    console.log(a," ",b);
}
console.log(a," ", b);

a = "This is OverWritting of a"
b = "This is OverWritting of b"
// c = "This is OverWritting of c" // throws TypeError since c is constant
console.log(c)