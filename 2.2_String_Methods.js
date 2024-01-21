// String Methods

// toUpperCase and toLowerCase methods
console.log("This is toUpperCase() and toLowerCase() methods");
let int1 = "Luffy"
console.log(int1.toUpperCase());
console.log(int1.toLowerCase());

console.log();
// slice() method
console.log("This is Slice() method");
let A = 'King of Pirates'
a = A.slice(0, 4)
b = A.slice(5, 7)
c = A.slice(8)

console.log(a);
console.log(b);
console.log(c);

console.log();
// substring() method
console.log("This is substring() method");
let str = "Mind, Power, Soul";
let part = str.substring(6, 11);
console.log(part);

console.log();
// substr() method
console.log("This is substr() method");
let str2 = "Mind, Power, Soul";
let part2 = str2.substr(6, 5);
console.log(part2);

console.log();
// replace() method
console.log("This is replace() method");
let str3 = "Mind, Power, Soul";
let part3 = str3.replace("Power", "Space");
console.log(part3);

console.log();
// replaceAll() method
console.log("This is replaceAll() method");
let str4 = "Mind, Power, Power, Soul";
let part4 = str4.replaceAll("Power", "Ace");
console.log(part4);

console.log();
// trim() method
console.log("This is trim() method");
let z = "       Hello         "
console.log(z);
console.log(z.trim());