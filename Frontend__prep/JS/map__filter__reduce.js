//map 
let arr = [1,2,3];
let newArr = arr.map((item) => ++item);
console.log(newArr); //[2,3,4]
console.log(arr); // [1,2,3]

// output based
let x,y =  10; 
console.log(x,y) // undefined 10


//filter()
let q = [1,2,3,4,5];
let w = q.filter(item => item%2 === 0);
console.log(w); //[2,4]
console.log(q);

//reduce() 
let ar1 = [1,2,3,4,5];
let ans = ar1.reduce((accumulator, currentItem) => accumulator + currentItem);
console.log(ans);


//example of usage of all above three methods 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter the even numbers, square them, and then sum them up
const sum = array
  .filter((num) => num % 2 === 0) // Filter out the even numbers
  .map((num) => num * num) // Square each even number
  .reduce((sum, num) => sum + num, 0); // Sum them up

console.log(sum); // Output the sum


