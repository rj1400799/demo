/**
 * Object orientated using ts
 * Topics: 
 * Intro to Object orientated programming 
 * Classes
 * Constructors 
 * Properties and methods 
 * Access control keywords 
 * Getters and setters 
 * Static members
 * creating dynamic properties using 'Index Signatures' 
 * Inheritance --> reusing code
 * Polymorphsim 
 * Abstract classes
 * Interfaces
 */

/**
 * Object oriented programming??
 * 1. A style of programming or paradigms programming
 * 2. We have many programming paradigms 
 *    a. Procedural 
 *    b. Functional 
 *    c. Object-oriented 
 *    d. Event-driven 
 *    e. Aspect-oriented 
 *    f. so on..... 
 * 
 * 3. These are not languages, these are just paradigms, for ex: js/ts supports
 *     functional and oop
 * 4. Variables inside an object are properties 
 * 5. Functions inside an object are methods
 */

/**
 * 1. OOPS is all about objects, to create an object we need classes.
 * 2. A class is a blueprint for creating objects. It is like a object factory.
 * 3. 
 */

//parcel casing 
class Account {
   readonly id: number; //readonly 
   owner: string; 
   private _balance: number; 
   nickname?: string; //optional 
   
   //used to initializing an object 
   //shouldn't have return, it by default returns 
   // an instance of this class.  
   constructor(id: number, owner: string, balance: number){
      this.id = id; 
      this.owner = owner; 
      this._balance = balance; 
   }

   deposit(amount: number): void {
      if(amount <= 0){
         throw new Error('Invalid amount');
      }
      this._balance +=amount; 
   }

   private calTax(): number {
     return 0; 
   }

   getBalance():number {
      this.calTax(); //as it's private method, it needs to be called
      //otherwise compiler will throw an error
      return this._balance;
   }

}

//Imp note: compile this js code and see it's js file
//it doesn't have properties in it, 
//In JS, we only have constructor which initialize it's
//properties, only in ts we have properties inside a class.

let account = new Account(27, 'laxman', 0); 
/**
 * account. -> this dot is known as period 
 * entering period you will see auto suggestions
 * blue in color(vs code)-> properties 
 * purple in color -> methods 
 */
//account.deposit(100); 
console.log(account instanceof Account); //true (bool, it expects an expression)
//above line prints object, but what we want to know it's
//exact type of custom object, we use instanceof

/**
 * In Ts, we have modifiers to our properties,
 * this helps us write more robust code
 */

//......................................................................

//Modifiers 
//1. readonly modifier 
//what if we modify our account id outside for this class's constructor,
//it can lead to a prob/bug, therefore assign readonly modifier to it.
//it therefore can't be modified outside constructor

// optional modifier --> if not mandatory we can use this

//......................................................................

/**
 * Access modifiers/ controllers 
 * 1. Public 
 * 2. Private
 * 3. Protected 
 * 
 * by default all properties all public
 */

//read balance 
console.log(account.getBalance());
// account.calculateTax(); //prohibited

//......................................................................
//Parameter properties 

// class demo {
//    readonly id: number;

//    constructor(id: number){
//       this.id = id; 
//    }
// }

/**
 * TS has some cool feature, we don't need to write as above, lot of code
 * but readable, we can write as below which is short
 */

class Demo {
   // readonly id: number; //no need
   
   //below will create a property, initialize it, assign modifier(shortcut)
   //but does same thing
   constructor(public readonly id: number){
      // this.id = id; // no need
   }
}

let demo1 = new Demo(12);

console.log(demo1.id) //12

//use as below, paramter properties 
class Account1 {
    
   constructor(public readonly id: number, 
   public owner: string, 
   private _balance: number){
   }
   //getters
   get balance() {
      return this._balance;
   }
   //setters
   //below ex is not realistic, but only for demonstration 
   set balance(value: number){
      if(value < 0) {
         throw new Error('Invalid value');
      }
      this._balance = value; 
   }
}

//......................................................................
/**
 * Getters and Setters
 * here we can get and set values to our properties,
 * get/set methods will be called instead of directly
 * modifying our properties, here we can chance to validate few things
 */

//......................................................................

/**
 * Index Signatures 
 * In js, we can dynamically add properties
 * but in ts, it is very strict about the shape of it's objects
 */

class SeatAssignment {
   // A1, A2, ....
   // Mosh, Lakki, ...

   //Index signature property 
   [seatNumber: string]: string; 
}

let seats = new SeatAssignment(); 
seats.A1 = 'Mosh'; 
seats['A1'] = 'Lakki'; //other accessing way
// seats.A2 = 1;  //error

//Using index signature, we can have dynamic properties
//with type safety

//......................................................................

// Static members
// A static property is a property which belongs to a class but not to
// an object. 

class Ride {
   activeRides: number = 0; 

   start(){
      this.activeRides++; 
   }
   stop(){
      this.activeRides--; 
   }

}

let ride1 = new Ride();
ride1.start; //prints 1 
let ride2 = new Ride();
ride2.start; //prints 1  // because these are two different objects. 

//static example
class RideStaticDemo {
   private static _activeRides: number = 0; 

   start(){
      RideStaticDemo._activeRides++; 
   }
   stop(){
      RideStaticDemo._activeRides--; 
   }
   //when working with static properties,
   //we have make method also to static
   static get activeRides() {
      return RideStaticDemo._activeRides; 
   }

}

let ride3 = new RideStaticDemo();
ride1.start; //prints 1 
let ride4 = new RideStaticDemo();
console.log(ride2.start); //prints 2

//whenever we make any property or method as static, then we only
//have one instance of it in memory. Thus making it belong to a class
//but not an object.

//.........................................................................

//Inheritance --> Mechanism to reuse our code
//Common properties/methods can be kept in a differnt class and
//child classes can inherit this above class
/**
 * Person (name, walk(), talk()) ---> Parent/Base/Super class
 * Student, Teacher can inherit above class ---> Child/Derived/Sub class
 */

class Person {
   constructor(public firstName: string, public lastName: string) {}

   get fullName() {
      return this.firstName + " " + this.lastName; 
   }

   walk() {
      console.log("Walking");
   }
}


class Student extends Person {

   constructor(public studentId: number,  firstName: string, lastName: string){
      super(firstName, lastName);
   }

   takeTest() {
      console.log('Taking a test');
   }
}

let student = new Student(1, 'kari', 'laxman');
console.log(student.fullName);

//generally each class should be written in a different file 
//we will see in module's section.

//.............................................................................


/**
 * Method overriding: changing a method's implementation
 * Sometimes we need to modify the inherited code, therefore we have method
 * overriding. 
 */

/**
 *  See below code, we don't need to have a super() all the time,
 *  if we don't want to keep/create properties in child class, we can have
 *  code as below
 *  
 */ 

class Teacher extends Person {
   //tell compiler that we are overriding the actual implementation
   //of fullName method in parent class
   //super.fullName --> executes the actual parent implementation.

   //it also works if we remove override keyword
   //but it will remove connection from actual method
   //therefore we have o enable ts config 
   //noImplicitOverride: true 
   override get fullName() {
      return 'Professor' + ' ' + super.fullName; 
   }
}

let teacher = new Teacher('kari', 'hari');
console.log(teacher);

//.............................................................................

/**
 * Polymorphism (many forms)
 * means an object can take many forms 
 * 
 */

printNames([
   new Student(1, 'John', 'Smith'),
   new Teacher('Mosh', 'Hamedani')
]);

function printNames(people: Person[]){
   //here this below person takes a different form
   //in each iteration, first it takes Student form
   //then it takes Teacher form, this is polymorphism
   for(let person of people) 
      console.log(person.fullName);
   // output: 
   // John Smith 
   // Professor Mosh Hamedani
}

/**
 * How can this be useful?? 
 * Now in future we can introduce a new object and can utilise
 * this printNames func without modifying this
 * 
 * This introduces a principle in OOPs
 * 
 * Open closed principle: 
 * Classes should be open for extension and close for modification.
 * 
 * We were able to achieve polymorphism using override keyword,
 * without it we won't be able to, 
 * Also, by removing override, it disconnects from actual implementation,
 * which might break something. (Explore more if needed).
 */

//...........................................................................

// Private vs Protected Members 

// Only difference is private members are inherited 
// but protected members are not. (Can't be used in child classes, not available)
// Don't use unless you know what you are doing, 
// It can create coupling. 


//...........................................................................

/**
 * Abstact classes and methods 
 * If you want to restrict user from creating an instance,
 * you can make that class to an abstract class.  
 * Ex for that use case
 */

// won't allow to create an instane of this class, 
// not ready or not allowed knowingly. 
abstract class Shape {
   constructor(public color: string) {} 

   // abstract method (use below syntax, no {})
   // should have a return type as void 
   // abstract methods can only exist inside 
   // abstract classes. 
   abstract render(): void;
}

class Circle extends Shape {
   constructor(public radius: number, color: string) {
      super(color);
   }

   override render(): void {
      console.log('Rendering a circle');
   }
}

//let shape = new Shape('red'); //won't allow now 
//shape.render(); //we don't want to allow this, this doesn't make sense


//........................................................................

// Interface 
/**
 * We know, classes are blueprints for creating objects 
 * 
 * Interfaces --> To define the shape of objects. 
 * Interface methods cannot have any logic implementations in it. 
 * Interfaces can also be inherited
 */

/**
 * In order to create a base calender shape/ interface, we do as below
 * As there are many calender types, we first create an interface 
 * and inherit from this and have each types implementation in a new class.
 * 
 * Calender types: 
 * Google calender 
 * Outlook calender 
 * etc...
 */

//1. Using class based implementation
// abstract class Calender {
//    constructor(public name: string){} 

//    abstract addEvent(): void; 
//    abstract removeEvent(): void;
// }

//2. Using interfaces
interface Calender {
   name: string;
   addEvent(): void;
   removeEvent(): void; 
}

/**
 * If you compile this ts code, it will generate a js code
 * if you see inside that js code, you won't find this
 * interface related code, i.e. this is just used by ts
 * for type checking, 
 * 
 * As interface is just used to shape an object and it
 * doesn't have any core algorithm logic which child classes
 * can utilise, we can use interfaces here. 
 * This makes our both ts and js code more concise and shorter
 */

//Can be inherited too 
interface CloudCalender extends Calender {
   sync(): void; 
}

// Now we have to implement core/actual implementation, then do as below

/* The class GoogleCalender implements the Calender interface in TypeScript. */
class GoogleCalender implements Calender {
   constructor(public name: string) {}

   addEvent(): void {
      throw new Error('Method not implemented.');
   } 

   removeEvent(): void {
      throw new Error('Method not implemented.');
   }
}

/**
 * Interfaces vs Types
   In TypeScript, interfaces and type aliases can be used interchangeably.
   Both can be used to describe the shape of an object:
   
   Interface:

   interface Person {
     name: string;
   }
  
   let person: Person = {
     name: 'Mosh',
   };

   Type:

   type Person = {
    name: string;
   };

   let person: Person = {
    name: ‘Mosh',
   };
   
   A class can also implement an interface or a type alias:

   class MyCalendar extends MyInterface {}
   class MyCalendar extends MyType {}
   
   It’s more conventional to use an interface in front of the extends keyword, though.
 */

//........................................................................

// Types, interfaces aren't seen in compiled js file, because these are just 
// created for ts compiler for type checking while developing/compiling.
type Name = {
   user: string
}

class Person1 implements Name {
   constructor(public user: string){};
}

let a12 = new Person1('alkki');
console.log(a12);