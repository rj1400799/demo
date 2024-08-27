1. Mutable --> primitive values (number, string, boolean, null, undefined)
2. Immutable --> arrays and objects 
3. we now have tuples 
4. copy an object and make sure modifying one doesn't modify the original obj, how ???
5. map, filter, reduce methods 
6. call, apply, bind methods 
7. currying and it's importance 
8. let const var in js?
9. scoping of these above keywords ??
10. arrays, objects in js are mutable 
11. primitives in js are immutable 
12. state updates in react are immutable, reconilation process is optimized for immutable data structures. By using immutable updates, React can efficiently compare the previous state with the new state to determine what has changed.

**Deep Copy Example** 
```javascript
// Source object
const sourceObj = { a: 1, b: [2, 3], c: { d: 4, e: 5 } };

// Deep copy using JSON
const copiedObjDeep = JSON.parse(JSON.stringify(sourceObj));

// Modify the copied object
copiedObjDeep.a = 100;
copiedObjDeep.b[0] = 200;

console.log("Source object:", sourceObj);
console.log("Deep copied object:", copiedObjDeep);
```