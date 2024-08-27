/**
 * 1. Non primitive values in js are mutable, In JavaScript, objects are mutable, meaning their 
 * state can be changed after creation. When you modify the properties of an object, you're changing its state
 * 2. Primitive values in js are immutable, i.e.
 */

/**
 * 1. In JavaScript, primitive data types such as numbers, strings, booleans, null, undefined, and symbols are immutable. 
 * This means that once they are created, their value cannot be changed. For example, if you have a string "hello", 
 * you cannot change the "h" to another character directly; you would need to create a new string with the desired value.
 * 2. However, objects and arrays in JavaScript are mutable. Once created, their properties or elements can be changed. 
 * This is what we discussed earlier with your example where a and b both refer to the same object, and changes made 
 * through one reference are reflected in the other because they are both pointing to the same mutable object.
 * To achieve immutability with objects and arrays in JavaScript, you would typically create a new object or array 
 * with the desired changes instead of modifying the existing one. This involves techniques like spreading, concatenation, 
 * or methods like Object.assign() for objects, and methods like concat() or slice() for arrays.
 */