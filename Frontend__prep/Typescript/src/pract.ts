/**
 * Basics: 
 * some basic (number, string, etc...)
 * any type 
 * arrays
 * Tuples
 * Enums
 * Functions
 * Objects
 */



let a: number = 12;
if (a < 10) {
  a += 20;
}
console.log(a);

let b = "lax";

// any type in ts
let some;
some = 1;
some = "string"; // here we are losing ts features, this variable can hold any type of data

// function cal(val){ // Parameter 'val' implicitly has an 'any' type.
//   console.log(val);
//   ts compiler throws above error, we can disable by changing below prop in tsconfig
//   "noImplicitAny": false,
// }
// ...............................................................................................................
// arrays
// In js, each element can be of different type, because arrays in js are dynamic.
// In TS, we have to give the type of elements it can hold, for ex:
let numbers: number[] = [1, 2, 3, 4];

// Remember, if you are initiazing your variable, no need to give it's type
// because ts compiler can detect it's type while compiling.
// For ex:
let numbers2 = [1, 2, 3, 4];

// But if you initialized with an empty array, you need to give it's type
let container: string[] = [];
container.push("laxman");
// container.push(12); --? gives an error, because it's a number

//If you fail to give type, then no use, see below

let container2 = []; //now it will have type (any[])
container2.push(12); //pushed a number
container2.push("laxman"); // pushed a string element too
// waste right?? Therefore it if an empty container, give it's type
// i.e. annotate it

// ...............................................................................................................

// Remember, as ts compiler knows the type of the variable, it will
// help dev in code auto completion, i.e. provides suggestions
// for ex: container is an array, ( typing container. ) gives, suggestions
// of all available methods of array (like push, pop, etc)

// ...............................................................................................................
// Tuples --> new type in ts
// If you have a fixed length and you know it's type, you can use tuples
let user: [number, string] = [1, "laxman"];
// 1 --> number
// "laxman" --> string
// when compiled this tuple is converted to js array,
// thereore when you do "user."
user.push(12); // we can push values to this tuple too, ts bug
console.log(user); // don't know why when executing this isn't getting printed

// Tuples --> only use when you know it has a fixed length,
// only recommended for 2 elements (key value pairs)
// otherwise it makes code messy.

// ...............................................................................................................
// Enums --> built type
// Enums -- list of related constants

// without ts, you do as below
// const small = 1;
// const medium = 2;
// const large = 3;

//With TS using Enums
enum Size {
  Small = 1,
  Medium,
  Large,
}

// if you initialize Small with 1, Medium becomes 2 and Large becomes 3
//if you don't then Small - 0, Medium 1, ...
// if you give a string as value, for ex: Small = "s", ts compiler can't auto assign others

// use enums
let mySize: Size = Size.Small;
console.log(mySize); // 1

// if you compile and look into js, you won't understand the code
// but if you write const before enum, it will optimie your code,
// it won't make sense if u look at js code (try it)

const enum Size1 {
  Small,
  Medium,
} // use const to optimise the code

// let size: Size1 = Size1.Small = 10;  // you can't because these are constants

// ...............................................................................................................
// Functions (annotate funcs always)
// "noUnusedParameters": true, /* Raise an error when a function parameter isn't read. */
// "noImplicitReturns": true,  /* Enable error reporting for codepaths that do not explicitly return in a function. */
// In js, by default if yu don't return anything, js returns undefined, which is implicit
// "noUnusedLocals" --> enable this as well
let x;
function calculateTax(
  income: number,
  taxYear = 2022,
  optionalParameter?: any
): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  if (optionalParameter) {
    return 90_000;
  }
  return income * 1.3;
}

calculateTax(10_000);
//Note:
// 1. If you know want to pass some arguments, you can make those
// parameters as optional by using ?
// cal(val?: number)
// or give default as above ex: , if given it will override default one
// also have ugly way
// if((taxYear || 2022) < 2022){ // uses 2022, if taxYear is undefined

//For funcs, remember these 5 (annotate params type and return type aand use above 3 configs)

// ...............................................................................................................
// Objects
// In js, objects are dynamic, their shape can change throught out the
// lifetime of our programs.

let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

//if name isn't optional, you have to assign this name prop to empty
// you cannot assign with null or undefined in ts.

// if you want to make Readonly to props, we can use readonly modifier

let emp: {
  readonly id: number;
};




