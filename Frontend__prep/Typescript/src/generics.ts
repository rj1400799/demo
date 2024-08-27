/**
 * Generics:
 * Generic classes
 * Generic functions
 * Generic interfaces
 * Generic constraints
 * Type maping ----> powerful technique for type transforming
 */

// with any type, we lose type checking

// problem
// class KeyValuePair {
//    constructor(public key: number, public value: string) {}
// }

// we can use any, but not recommended
// also duplicate above code and make it as StringKeyValuePair class
// but we end up duplication code

/**
 * Therefore, use generics
 */

// ...................................................................

// Generic classes :

//we can give any names inside <>
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

// we don't even have to write <string, string> below, the compile
// can infer
let pair = new KeyValuePair<string, string>("1", "a");
pair.key.slice;

// ...................................................................

// Generic functions

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbersContainer = ArrayUtils.wrapInArray(1);

// ...................................................................

// Generic interfaces
// http: //mywebsite.com/users
// http: //mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
   username: string, 
}

interface Product {
   title: string
}

let result = fetch<Product>('url'); 
result.data // data will of Product

let result1 = fetch<User>('url'); 
result.data // data will of User

// ...................................................................

/**
 * Generic constraints 
 * constrain parameter type 
 * 
 */

function echo<T extends number | string>(value: T): T {
   return value; 
}

echo('1');
// echo(true); //error

// Also constrain the shape of an object 
function echo1<T extends {name: string}>(value: T): T {
   return value; 
}

echo1({name: 'laxman'})

// Also constrain by interface 
class PersonNew {
   constructor(public name: string) {}
}

function echo2<T extends PersonNew>(value: T): T {
   return value; 
}

// .............................................................

class CustomerNew extends  PersonNew {
}
// directly or indirectly derives from Person

function echo3<T extends PersonNew>(value: T): T {
   return value; 
}

echo3(new CustomerNew('a'));

// ...............................................................

/**
 * Extending generic classes and inheritance 
 * 
 */

/**
 * E-Commerce app, we have products, store 
 */ 

interface Product {
   name: string; 
   price: number; 
} 

class Store<T> {
   protected _objects: T[] = []; // initiaze here itself 

   add(obj: T): void {
      this._objects.push(obj);
   }
}

let store = new Store<Product>(); 

// extend using below 3 ways 

// 1. Pass on the generic type parameter 
class CompressibleStore<T> extends Store<T> {
   compress() {}
} 

let storeNew = new CompressibleStore<Product>();
// storeNew. //will have 2 methods

// 2. here our T need not to be Product, it can be anything with
// name property. 
// Restrict the generic type parameter
class SearableStore<T extends {name: string}> extends Store<T> {
  find(name: string): T | undefined {
   return this._objects.find(obj => obj.name === name)
  }
}

// 3. Fix the generic type parameter 
class ProductStore extends Store<Product> {
   filterByCategory(category: string): Product[] {
      return [];
   }
}

// ...............................................................

/**
 * keyOf Operator 
 * 
 */

interface Product1 {
   name: string; 
   price: number; 
} 

class Store1<T> {
   protected _objects: T[] = []; // initiaze here itself 

   add(obj: T): void {
      this._objects.push(obj);
   }
   // before fix (issue --> line 208)
   // find(property: string, value: unknown): T | undefined {
   //    return this._objects.find(obj => obj[property] === value);
   // }

   // after fix 
   // T is Product 
   // keyof T => 'name' | 'price'
   find(property: keyof T, value: unknown): T | undefined {
      return this._objects.find(obj => obj[property] === value);
   }
}

let store1 = new Store1<Product1>(); 
store1.add({name: 'a', price: 1});
store1.find('name', 'a');
store1.find('price', 1); 
// store1.find('nonExistingProduct', 1); // we can do this and
// program will crash as this prop doesn't exist on Product interface

// after fix, line 210 will raise error at compile time and we can fix

// Note: we only use [] for dynamically adding properties
// above we tried --> obj[property] --> won't work 

// ...............................................................

/**
 * Type mapping --> sometimes we need to a base a type on another type
 * 
 */

interface Product1 {
   name: string; 
   price: number; 
}

// Better way to create a new type whose props are 
// readonly, instead of hard coding and giving readonly before
// each prop. 
type ReadOnlyProduct = {
   // Index signature 
   // keyof 
   // K refers to key
   readonly [K in keyof Product]: Product[K]
}

// make above readonly type to generic 

type ReadOnly<T> = {
   // Index signature 
   // keyof 
   // K refers to key
   readonly [K in keyof T]: T[K]
}

let product: ReadOnly<Product1> = {
   name: 'a',
   price: 1, 
}

// make each prop optional 
type Optional<T> = {
   [K in keyof T]?: T[K]
}

// make each prop NULLABLE 
type Nullable<T> = {
   [K in keyof T]: T[K] | null
}

// Refer --> TS utility types 








