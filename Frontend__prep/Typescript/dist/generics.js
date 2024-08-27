"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("1", "a");
pair.key.slice;
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbersContainer = ArrayUtils.wrapInArray(1);
function fetch(url) {
    return { data: null, error: null };
}
let result = fetch('url');
result.data;
let result1 = fetch('url');
result.data;
function echo(value) {
    return value;
}
echo('1');
function echo1(value) {
    return value;
}
echo1({ name: 'laxman' });
class PersonNew {
    constructor(name) {
        this.name = name;
    }
}
function echo2(value) {
    return value;
}
class CustomerNew extends PersonNew {
}
function echo3(value) {
    return value;
}
echo3(new CustomerNew('a'));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
let store = new Store();
class CompressibleStore extends Store {
    compress() { }
}
let storeNew = new CompressibleStore();
class SearableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
class Store1 {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store1 = new Store1();
store1.add({ name: 'a', price: 1 });
store1.find('name', 'a');
store1.find('price', 1);
let product = {
    name: 'a',
    price: 1,
};
//# sourceMappingURL=generics.js.map