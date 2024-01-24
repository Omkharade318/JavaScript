// for loop
console.log("for loop: ");
let arr = [44, 56, 32, 7, 788, 98, 65]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log();

// for...of loop
console.log('for...of loop: ');
let arr2 = [44, 56, 32, 7, 788, 98, 65]
for(let i of arr2){                    // shorter version of OG for loop
    console.log(i);  
}
console.log();

// for....of loop
console.log("for...of loop: ");
let arr3 = [44, 56, 32, 7, 788, 98, 65]
for(let i in arr3){                    // gives index
    console.log(i);  
}
console.log();

console.log("forEach loop: ");
let arr4 = [44, 56, 32, 7, 788, 98, 65]

arr4.forEach((element)=> {
    console.log(element * element);
})

