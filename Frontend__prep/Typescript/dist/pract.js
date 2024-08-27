"use strict";
let a = 12;
if (a < 10) {
    a += 20;
}
console.log(a);
let b = "lax";
let some;
some = 1;
some = "string";
let numbers = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let container = [];
container.push("laxman");
let container2 = [];
container2.push(12);
container2.push("laxman");
let user = [1, "laxman"];
user.push(12);
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Small;
console.log(mySize);
let x;
function calculateTax(income, taxYear = 2022, optionalParameter) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    if (optionalParameter) {
        return 90000;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
let emp;
//# sourceMappingURL=pract.js.map