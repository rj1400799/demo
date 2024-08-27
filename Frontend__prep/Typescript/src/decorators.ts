/**
 * Decorators: change and enhance our classes
 * class decorators
 * method decorators
 * property decorators
 * Accessor decorators
 * Parameter decorators
 *
 */

/**
 * Decortors are attributes that we applied to our classes and
 * their members, with this we can change how they behave.
 *
 * This decorator is like a function, our js compiler will call
 * this func by passing this class to it.
 * Angular, Vue has it's own decorators built-in.
 *
 * By this we can add new properties, new methods, change it's
 * implementation.
 *
 * Need to enable experimentalDecorators in tsconfig,
 * can be updated in future.
 *
 */

/**
 * class decorators
 */

// if we give parameters type as Function
// compiler will get to know that we will be passing
// this decorator to a class

// here we can add/remove/modify implementation for any class
function Component(constructor: Function) {
  // Key point: our chance to enhance our class
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

// prototype --> In js we have prototypes, through this
// it inherits some properties, methods.

//runtime will call our above function when creating an instance
@Component
class ProfileComponent {}

//note: when creating instance it doesn't calls above decorator
let op = new ProfileComponent();

// we can also this above implementation using base class and extending
// as well but decorators are another tool in ts.

// ...................................................................

/**
 * Parameterized decorators
 *
 */

type ComponentOptions = {
  selector: string;
};

// this function is acting as a factor
// which returns a decorator

// Decorator factory
function Component1(options: ComponentOptions) {
  return (constructor: Function) => {
    // Key point: our chance to enhance our class
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

@Component1({ selector: "#my-profile" })
class ProfileComp {}

// ...................................................................

/**
 * Decorator Composition -- we can also apply multiple
 * decorators to a class or its members
 */

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component1({ selector: "#my-profile" })
@Pipe
// calculated this way --> f(g(x)) --> first our Pipe decorator
// will enhance below class and resulted will be enhanced by Component1
class ProfileComp1 {}

//...................................................................

/**
 * Method decorators
 *
 * Every property in an object has a PropertyDescriptor which
 * provides description about it.
 */

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function; // we are doing type assertion
  // as compiler doesn't know it's type, as we given any type
  // ts asks to keep any only here, apart from here, it's not recommended

  // when redefining a function we should always use normal functions
  // arow funcs doesn't have this
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class PersonClass {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let p = new PersonClass();
p.say("lakki");

//...................................................................

/**
 * Accessor Decorators --> apply to getters and setters
 */

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // .get for accessors (getters and setters)
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class PersonDefault {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let personDefault = new PersonDefault("mosh", "hamedani");
console.log(personDefault.fullName);

/**
 * Trust me
 * original --> suppose we know it's a function
 * but TS Compiler knows its as any
 * if we want to tell compiler to trust us --> use (!)
 *
 * original!.call(this) --> func therefore .call used
 */

//...................................................................

/**
 * Property decorators
 * with this, we can enhance existing properties
 */

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          // throw error, when dev compiles, it throws errors
          // in the console.
          throw new Error(
            `${propertyName} should be at least ${length} characters`
          );
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user1 = new User("1234"); //called when initiasing an obj
// also called when trying to modify this property
// user1.password = "12"; // length 2, throws errors.
console.log(user1.password);

//...................................................................

/**
 * Paramter decorators
 * not used frequently but if you work on building a framework,
 * you might be using this.
 * 
 * Used to watch some parameters, and do stuff based on that 
 */

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  // here we collect telemetry, we can do any stuff with this lateron
  watchedParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);
