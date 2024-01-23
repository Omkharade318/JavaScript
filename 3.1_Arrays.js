// toString() method
console.log("toString() method: ");
let prices = [100, 200, 300, 400, 500]
console.log(prices.toString());

console.log();

//join() method
console.log("join() method: ");
let nums = [7, 5 , 6]
console.log(nums.join("-"));
console.log();

//pop() method
console.log("pop() method: ");
let numbers = [20, 30, 40, 50];
console.log(numbers)
numbers.pop();
console.log(numbers)
console.log(numbers.pop())

console.log();

// push() method
console.log("push() method: ");
let a = [7,1,2,8]
console.log(a);
a.push(9)
console.log(a);
console.log(a.push(9)); // returns a.length
console.log();

// delete operator
console.log("delete operator: ");
let arr= [1,2,3]
console.log(arr);
console.log(delete arr[0]); //true
console.log(arr);

console.log();

// concat() method
console.log("concat() method: ");
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]
console.log(a1.concat(a2,a3));
console.log();

//sort() method
console.log("sort() method: ");
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229,]
console.log(num)
num.sort()
console.log(num);

console.log();

//splice() method
console.log("splice() method: ");
let num2 = [20, 30, 40, 50]
num2.splice(2, 2, 1040, 1050, 1060, 1070);
console.log(num2);
console.log(num2.splice(2, 2, 1040, 1050, 1060, 1070));

console.log();

//reverse() method
console.log("reverse() method: ");
let age = [5,6,7,8,9,10]
console.log(age.reverse());