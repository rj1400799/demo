/**
 * Topics: 
 * a. Type aliases --> to re-use code
 * b. Use Unions and intersections to combine types
 * c. Type narrowing 
 * d. Nullable types
 * e. The unknown type
 * f. The never type 
 */
//..........................................................................................
// type aliases
//DRY Principle 
// Use pascal case (syntax mandatory)
// this way we shape our employee object, which can be re-used
type Employee = {
   readonly id: number,
   name: string,
   retire: (date: Date) => void 
}

//use it as below 
let employee1: Employee = {
  id: 27,
  name: 'laxman',
  retire: (date) => date
}
//...........................................................................................
//Union Types --> with unions we can give variables or a function parameter
//more than one type (number | string) (using or operator)
//now the compiler only shows(auto-suggestions) the common methods for this below variable
// which is either a number or a string. 

function kgToLbs(weight: number | string): number{
   //Narrowing 
   if (typeof weight === 'number'){
      //in this block ts compiler knows weight is number
      //therefore suggests all methods of number
      return weight * 2.2;
   } else {
      return parseInt(weight) * 2.2;
   }
}
//if you do tsc and compile this code, your js file doesn't have any types
//it's just for your dev process, compiler checks code while writting ts code
//it's purely for the compiler for type checking. 
kgToLbs(10);
kgToLbs('10');

//..........................................................................................
//Intersection type (Another technic to combine types) 

type Draggable = {
   drag: () => void
}

type Resizable = {
   resize: () => void
}

type UIWidget = Draggable & Resizable; 

let textBox: UIWidget = {
   drag: () => {},
   resize: () => {}
}
// can we written as below also
let textBox1: Draggable & Resizable = {
   drag: () => {},
   resize: () => {}
}

//..........................................................................................

//Literal types (to limit value of a variable)
let quantity: 50 = 50; //can have 50 as value 

//let quantity1: 50 = 51; // error
let quantity2: 50 | 100 = 100; //Union type 

//we can write above code in better way, as shown below 
type Quantity = 50 | 100; 
let quantity3: Quantity = 100;
//string values (any type is allowed)
type Metric = 'cm' | 'inch'; 

//TODO: HOW CAN YOU HAVE MORE VALUES 
//INSTEAD OF JUST 2, DON'T USE UNION TYPE

//......................................................................

//Nullable types
//ts is very strict when it comes to null and undefined as these are 
//common source of bugs 
//use union for this 

function greet(name: string | null){
   //name is truthy
   if(name){
      console.log(name.toUpperCase());
   } else {
      console.log('Hola!'); 
   }
}
greet(null)
//by default when strict check is enabled in ts config, it also checks
//these

//......................................................................
// Optionally chaining 
//Optional property access operator

type Customer = {
   //optional property
   birthday?: Date
}

function getCustomer(id: number): Customer | null {
   return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear()); 

//Optional element access operator 
// used when dealing with arrays 
//customers?.[0]

//Optional call operator 
let log: any = null; 
log?.('a');
//executes only if this 'log' actually referencing actual function 

//......................................................................
// The Nullish Coaelscing operator 
// Falsy values (undefind, null, '', false, 0)

//In js we for a case where 0 is a valid value, but if we use
//below snippet, js treats 0 as falsy, and speed gets 30 as value

let speed: number | null = null; //consider user given null as speed
let ride = {
   // speed: speed || 30 (issue here if speed is 0)
   
   //Nullish coalescing operator (checks for both null and undefined)
   //if speed is null or undefined than speed becomes 30,
   //if not the given speed value is assigned
   speed: speed ?? 30
}

//......................................................................
//Type assertions 
//Some times we know more about the type of the object than ts
//ex: 
//HTMLElement is a class defined in js that represents any kind of
//html element, it's like a base, 
//for more specific we have HTMLInputElement

/**
 * HTMLELement 
 * HTMLInputElement
 */
// here we are telling compiler that hey i know more about the type
//using as keyword 
let phone = document.getElementById('phone') as HTMLInputElement; 
phone.value
//as dosn't convert the type, here we are only telling that we know it's
//type 
/**
 * for ex: if this method (document.getElementById('phone')) doens't
 * return HTMLInputElement then the compiler won't throw any error
 * but the next line with crash as we accessing it's value considering
 * it's an input element
 * 
 * type conversion doesn't happens under the hood
 */

//another syntax for same (type assertion)
let phone1 = <HTMLInputElement> document.getElementById('phone'); 

//......................................................................

/**
 * The unknown type 
 * avoid using 'any' as much as possible 
 * what if we want to use it?? as shown below 
 */

// function render(document : any){
//    document.move(); //if there's no move method our program will crash
//    document.fly();
//    document.whateverWeWant();
// }

function render(document : unknown){
   //Narrowing 
   //typeof is only avaialble for primitive types
   //for custom defined types we have 'instanceof ourCustomType'
   if(typeof document === 'string'){
      //you will get all string methods here
      document.toLocaleLowerCase();
   }
   // document.move(); //if there's no move method our program will crash
   // document.fly();
   // document.whateverWeWant();
}
//if used unknown type our compiler will force us to do some type checks 
// as shown above, use unknown, don't prefer any

//......................................................................

//The never type
/**
 * never type --> which represents values that never occur,
 * not used often but let's see some examples 
 */

//if we don't write return type as never, 
//compiler infers the return type of below func as void
//hence we don't know the unreachable code issue
function processEvents(): never {
   while(true){
      //Read a message from a queue
   }
}

processEvents();
console.log('Hello world!'); // grayed-out meaning, it will never execute

//......................................................................