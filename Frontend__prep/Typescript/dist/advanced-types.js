"use strict";
var _a;
let employee1 = {
    id: 27,
    name: 'laxman',
    retire: (date) => date
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let textBox1 = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let quantity2 = 100;
let quantity3 = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola!');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let phone = document.getElementById('phone');
phone.value;
let phone1 = document.getElementById('phone');
function render(document) {
    if (typeof document === 'string') {
        document.toLocaleLowerCase();
    }
}
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log('Hello world!');
//# sourceMappingURL=advanced-types.js.map