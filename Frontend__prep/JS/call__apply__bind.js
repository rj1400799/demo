/**
 * call()  --> we can invoke a function and specify this context to it
 */

function fullName(arg){
   return this.firstName + this.lastName + "  " + arg;
}

const person1 = {
   firstName: "Kari",
   lastName: 'Laxman'
}
const a1 = fullName.call(person1, "something") //KariLaxman something
console.log(fullName.call(person1, [1,2])); //karilaxman 1 but return arg[index] instead of arg
console.log(a1);

const func = fullName.call(person1, [1,2]);
//console.log(func());


/**
 * apply() --> same as call()  but you specify arguments in an array
 * Note: you can give above example as well but pass arguments as an array
 */

let numbers = [1,2,3,4,5];

const maxi = Math.max.apply(null, numbers)

console.log(Math.max.apply(null, numbers));


/**
 * bind()  -> creates a new func and it has it's this keyword specified
 */

function greet(value){
   return "Good" + value + this.name;
}

let a2 = greet.bind({name:"laxman"}, "Morning");
console.log(greet.bind({name:"laxman"}, "Morning")) //[Function: bound greet] 
console.log(a()); //Good Morning Laxman //basically it created a new function and we specified this context
//to it


console.log(Math.abs(0.1 + 0.2) == 0.3)
console.log(0.1 + 0.2)

console.log("Try programiz.pro");

let a = [1, 2, 3, 4, 5, 6];

// Using reduce to sum even numbers in the array
const sumOfEvens = a.reduce((accumulator, current) => {
  if (current % 2 === 0) {
    console.log(current);
    return accumulator + current; // Include return statement here
  } else {
    return accumulator; // Return accumulator unchanged if current is odd
  }
}, 0); // Provide initial value for accumulator (0)

console.log(sumOfEvens); // Output: 12