// map() method
console.log("map() method: ");
let arr = [45, 33, 21]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + index;    // adds each element with its own index
})
console.log(a);

console.log();

// filter method
console.log('filter method: ');
let arr2 = [45, 23, 21, 10, 5, 45, 7, 9, 0, 9, 5]
let a2 = arr2.filter((element)=>{             // creates a new arr with elements less than 10
    return element < 10              
})
console.log(a2);

console.log();

// reduce method
console.log("reduce method: ");
let arr3 = [1, 2, 3, 5, 2, 1]
let a3 = arr3.reduce((number1, number2)=>{
    return number1 + number2; 
})
console.log(a3);