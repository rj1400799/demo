//return alphabets frequency
let store = "abababscccdddeddacbbfg";

let container = new Map();

for (let item of store) {
  //if already exists, just increment
  //else insert and set frequency to 1
  if (container.has(item)) {
   let value = container.get(item);
    container.set(item, ++value);
  } else {
    container.set(item, 1);
  }
}

console.log(container);

let obj = {
   a:1, 
   b:2,
   c:3
}
console.log(Object.keys(obj).length) //['a', 'b']
console.log(Object.values(obj)); //[1,2]

let a = "abcd"
console.log(a.length)


