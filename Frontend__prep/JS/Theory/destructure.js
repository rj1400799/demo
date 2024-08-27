/**
 * Destruturing : A way to extract value from an array or an object
 */

//example -1 
const container = [1,2,3,4,5];
const [first, second, ...rest] = container; 
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3,4,5]


//example 2 [Objects]
let obj = {
   name: "Kari laxman",
   age: "23",
   education : {
      university: "GVP",
      year: "2021"
   }
}
const {name, age, education:{university, year}} = obj;

console.log(name); //kari laxman
console.log(age); //23
//console.log(education); //education not defined 
console.log(university); //GVP
console.log(year); //2021