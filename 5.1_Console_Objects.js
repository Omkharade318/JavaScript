console.time('time')
console.log([1,2,3,4,5]);
console.table({a:1,b:2,c:3});
console.error("This is a simple error");
console.warn("This is a simple warning");

let i = 0;
while( i < 10){
    console.count(10);
    i++;
}
console.timeEnd('time')