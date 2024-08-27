/**
 * Modules to organize your code 
 * 
 * Creating and using modules 
 * Module formats
 * Default exports 
 * Wildcard imports 
 * Re-exporting
 */

/**
 * Exporting and importing 
 * 
 * use ctrl + . for shortcuts on errors 
 * (we can import/move code to new file etc)
 */

let person = new Person('q', 'q')

/**
 * Module formats
 * see tsconfig file 
 * we see, "module": "commonjs",   
 */

// WildCard imports

// import * as Shapes from "./Shapes";
// let circle = new Shapes.Circle(1);

//re-exporting 
/**
 * suppose we have shapes packages, 
 * we can have circle.ts, sqaure.ts
 * we can have index.js file and then we can
 * import all shapes inside this and then we
 * can export them and in other package, they can import
 * from one single file rather than diff files
 */

// enable this "moduleResolution": "node10",  