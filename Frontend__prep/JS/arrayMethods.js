// slice 
// slices a part from the array
// start index, end index
// end index value isn't considered 
// original array isn't modified
let a = [1,2,3,4,5];
let b = a.slice(1,3); 
console.log(b); // [2,3]
console.log(a); //[1,2,3,4,5]


//splice()
let a1 = [1,2,3,4,5];
let b1 = a1.splice(1,3,"34");
console.log(b1); // [2,3,4]
console.log(a1); // [1,'34', 5]

//reverse()
console.log(a1.reverse());

//isArray()
a1.isArray() //true

//sort()

//concat()
let a2 = [1];
let b2 = [2,3,4];
let c2 = [5,6];

console.log(a2.concat(b2)) //[1,2,3,4]
console.log(a2.concat(b2,c2)) //[1,2,3,4,5,6]

//shift() 
//1. removes first element from the array
//2. returns first element 
//3. modifies original array
let a3 = [1,2,3];
console.log(a3.shift()) // 1
console.log(a3) //[2,3]

//unshift()
//1. adds to first index 
//2. returns new length of array
//3. modifies array
let a4 = [1,2,3];
console.log(a4.unshift(25));
console.log(a4)

//pop()
//removes last element 
//returns last element 
//modifies original array
let a5 = [1,2,3];
console.log(a5.pop()); //3
console.log(a5) //[1,2]

//push()
//returns length of new array
//modifies array
//pushes at the last
let a6 = [1,2,3];
console.log(a6.push(4)) //4 (length of array)

//toString()
//returns string with array values separetd by commas(,)
//doesn't modify original array
let a7 = [1,2,3];
console.log(a7.toString())

//join()
//returns array as string
let a8 = [1,2,3]
console.log(a8.join("-")) // 1-2-3

//map()
//traverse the array 
let q = [1,2,3,4,5];
let a9 = q.map((item)=> item+1);
console.log(q); //[1,2,3,4,5]
console.log(a9) //[ 2, 3, 4, 5, 6 ]

//filter()
let y = [1,2,3,4,5,6];
//filter odd
let w = y.filter((item)=> (item%2===0));
console.log(w); //[2,4,6]
console.log(y); //[ 1, 2, 3, 4, 5, 6 ]

//reduce() --> (easy to remember sum func)
let u = [1,2,3,4,5];
let p = u.reduce((store,item)=> store+item); 
console.log(p); //15
console.log(u) // [ 1, 2, 3, 4, 5 ]

//includes() 
let store = ["lakki",1,2,3,4,"lakki"];
console.log(store.includes("lakki")) //true
//indexOf()
console.log(store.indexOf("lakki")) //returns first index

// remove element using index
let array = [1, 2, 3, 4, 5];
let indexToRemove = 2; // Index of the element to remove
array.splice(indexToRemove, 1); // Removes 1 element starting from indexToRemove
console.log(array); // Output: [1, 2, 4, 5]

/**
 * final list 
 * push()
 * pop()
 * shift()
 * unshift()
 * sort()
 * reverse()
 * isArray()
 * concat()
 * slice()
 * splice()
 * toString()
 * join()
 * map()
 * filter()
 * reduce()
 * includes()
 */

// IMP:
// splice() modifies the array in place and returns an array of the removed elements (if any).
// slice() returns a shallow copy of a portion of an array into a new array object.
// filter() creates a new array with all elements that pass the test implemented by the provided function.

// Choose the method that best fits your needs, whether it's modifying the array in place (splice()), 
// creating a new array without the removed element (slice() and spread operator), 
// or removing elements based on a condition (filter()).