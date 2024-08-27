"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }
    calTax() {
        return 0;
    }
    getBalance() {
        this.calTax();
        return this._balance;
    }
}
let account = new Account(27, 'laxman', 0);
console.log(account instanceof Account);
console.log(account.getBalance());
class Demo {
    constructor(id) {
        this.id = id;
    }
}
let demo1 = new Demo(12);
console.log(demo1.id);
class Account1 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error('Invalid value');
        }
        this._balance = value;
    }
}
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats['A1'] = 'Lakki';
class Ride {
    constructor() {
        this.activeRides = 0;
    }
    start() {
        this.activeRides++;
    }
    stop() {
        this.activeRides--;
    }
}
let ride1 = new Ride();
ride1.start;
let ride2 = new Ride();
ride2.start;
class RideStaticDemo {
    start() {
        RideStaticDemo._activeRides++;
    }
    stop() {
        RideStaticDemo._activeRides--;
    }
    static get activeRides() {
        return RideStaticDemo._activeRides;
    }
}
RideStaticDemo._activeRides = 0;
let ride3 = new RideStaticDemo();
ride1.start;
let ride4 = new RideStaticDemo();
console.log(ride2.start);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
let student = new Student(1, 'kari', 'laxman');
console.log(student.fullName);
class Teacher extends Person {
    get fullName() {
        return 'Professor' + ' ' + super.fullName;
    }
}
let teacher = new Teacher('kari', 'hari');
console.log(teacher);
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Mosh', 'Hamedani')
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a circle');
    }
}
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error('Method not implemented.');
    }
    removeEvent() {
        throw new Error('Method not implemented.');
    }
}
class Person1 {
    constructor(user) {
        this.user = user;
    }
    ;
}
let a12 = new Person1('alkki');
console.log(a12);
//# sourceMappingURL=classes.js.map