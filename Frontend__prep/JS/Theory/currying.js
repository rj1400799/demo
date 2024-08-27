/**
 * currying is a js functional programming technique where a function with multiple arguments is broken down 
 * into series of functions which takes in only one argument and will then finally return a final computed 
 * value using these arguments
 */

function curried(a){
   return function(b){
       return function(c){
           return a+b+c;
       }
   }
}

console.log(curried(1)(2)(3));