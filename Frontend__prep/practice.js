// const arrivals = [900, 940, 950, 1100, 1500, 1800];
// const departures = [910, 1200,1120, 1130, 1900, 2000];

// let events = []; 

// let size = arrivals.length; 
// let currentPlatformCount = 0; 
// let maxPlatformsRequired = 0;

// for(let i = 0; i<size ; i++){
//    events.push({timestamp: arrivals[i], type: "arrival"}); 
//    events.push({timestamp: departures[i], type:"departure"});
// }
// //sort based on timestamp 
// events.sort((a,b) => a.timestamp - b.timestamp);

// for(a of events){
//    if(a.type === "arrival"){
//       currentPlatformCount++;
//    } 
//    else{
//       currentPlatformCount--;
//    } 
//    maxPlatformsRequired = Math.max(maxPlatformsRequired, currentPlatformCount);
// }

// console.log(events);
// console.log("here is your ans :", maxPlatformsRequired)


/**
 * 
 * Logic: 
 * 
 */

// let n = 3; 
// let logs = ["0:start:0", "2:start:4", "2:end:5", "1:start:7", "1:end:10", "0:end:11"];
// let size = logs.length;
// let container = [];
// // let obj = {
// //    id: 1,
// //    type: Start,
// //    timeInSecs: null
// // }

// function findNumberAfter(a, b){
//    const matchStart = a.match(/start:(\d+)/); 
//    const startValue = matchStart ? matchStart[1]: null; 

//    //match end: and extract the number after that
//    const matchEnd = b.match(/end:(\d+)/);
//    const endValue = matchEnd ? matchEnd[1] : null; 
   
//    container.push({startValue, endValue});
// }
// for(let i=0;i<size;i++){
//    for(let j = i+1;j<size;j++){
//       if(logs[i][0] === logs[j][0]){
//          findNumberAfter(logs[i], logs[j]);
//          break;
//       }
//    }
// }
// console.log(container);
// let ans = []; 
// let stack = [container[0]]; 

// for(let i=1;i<size;i++){

// }

// console.log(ans);

//**Reverse a string */
// let strr = "hello";
// function reverseStr(str){
//    if(strr === ""){return "";}
//    return reverseStr((strr.substr(1)) + strr.charAt(0));
// }

// reverseStr(strr);


// class Node {
//    constructor(data){
//       this.data = data; 
//       this.next = null;
//    }
// } 

// class LinkedList {
//    constructor(){
//       this.head = null;
//    } 

//    append(data){
      
//    } 

//    print(head){

//    } 

//    reverseList(head){

//    }
// }

// let str = "Hello"; 
// str = +str; 
// console.log(typeof(str));

// str = str + "";
// console.log(typeof(str));

// let a; 
// console.log(a);

// let q = {
//    name : "laxman",
// } 

// console.log(q.age);

// if(1 === "1"){
//    console.log("true")
// }

// let er = 
// console.log(typeof(er));

// /**
//  * Falsy - null, Nan, undefined, " ", false, 0, -0, 
//  */

// let a1 = 1, b=4; 
// switch (a1 > b){
//    case true: 
//       console.log("true");
//    case false: 
//       console.log("false")
// }

// /**
//  * function declaration ---> parameters
//  * funcion call ---> arguments
//  */

// /**
//  * Array can hold different types of data
//  * size can be dynamic
//  */

// let arr = [true, "hello", 27, null, undefined, NaN]; 

// console.log(arr);

// /**
//  * Array methods 
//  * length()
//  * push()
//  * pop() --> removes last element 
//  * shift() --> removes first element 
//  * unshift() --> adds at the start 
//  * sort() 
//  * reverse()
//  */

// let array = [12,54,6,22,567];
// array.sort();
// array.sort((a,b) => a-b);
// let yu = array;
// array.shift();
// array.unshift(1)
// console.log(array);
// console.log(yu);


// let obj = {
//    "family Name": "Kari", 
//    age: 75
// }

// for(a in obj){
//   // console.log(obj[a]);
// }



// let {name="Laxman", ...details} = obj;

// console.log(details);

/**
 * let items = new Set()
 * Set Methods: 
 * add()
 * clear()
 * delete()
 * has()
 * size()
 */

// let arr = [3,5,4,3,2,1,2,3,6];
// let items = new Set(); 

// for(let i of arr){
//    items.add(i);
// }
// items.delete(2);

// items.add({name:"kari"});
// items.add({first:"kari"});
// items.add({first:"laxman"});
// items.add({first:"laxman"});
// console.log(items);

// function Personal(){
//    this.name = "kari";
//    this.age = 24;
// }

// let you = new Personal();

// console.log(you);


// let item = new Map(); 

// item.set("name", "Laxman");

// console.log(item.has("name1"));

// item.set("age", 24); 

// console.log(item.get("name"));

// let updated = item.get("name"); 

// item.set(updated, "yoyolAXMAN");

// console.log(item[""]);



// let ab = "abcdbbaabbbdd"; 

// let container = new Map();

// let size = ab.length; 

// for(let i of ab){
//    if(container.has(i)){
//       let val = container.get(i); 
//       container.set(i, ++val);
//    }
//    else{
//       container.set(i, 1); 
//    }
// } 

// console.log(container);

// container.delete('a');

// console.log(container.size);

// container.clear();

// console.log(container);


// let a = "Hello Laxman";
// a.trim();
// console.log(a.charAt(2));
// let b = "AND JOHN";
// a.concat(b);
// console.log(a)



// console.log(a); // Reference Error: 
// let a; 
// a = 10; 


// function a(){
//    var z = 2; 
//    function b(){
//       console.log(z);
//    } 
//    b();
// } 

// let q = a;
// q();
// console.log(q);

// //Map()
// let arr = [2,4,1,3,5];

// let output = arr.map((x)=>{
//    return x*2;
// })

// console.log(output);

//filter()
// let filtered = arr.filter((x)=>{
//    return x>2;
// })
// console.log(filtered);

//reduce()
// let max = 0; 
// let reduced = arr.reduce((max,x)=>{
//    if(max<x){max = x};
//    return max;
// })
// console.log(reduced);

// let a = "0:start:23";

// const match = a.match(/start:(\d+)/);
// console.log(match);
// const startValue = match ? match[1] : null; 

// console.log(startValue);


// let a = 1; 
// function b(){
//    var a = 2; 
// }

let obj = {
   a: 2, 
   details: {
      name : "laxman", 
      age : 3,
      home: {
         state: "ap"
      }
   }
}

let obj2 = {
   a: 2, 
   details: {
      name : "laxman", 
      age : 31,
      home: {
         state: "ap"
      }
   }
}

// if(JSON.stringify(obj) === JSON.stringify(obj2)){
//    console.log("same");
// }else{
//    console.log("not same")
// }

//shallow copy
//let obj3 = Object.assign({}, obj2); 

//deep copy
// let obj3 = JSON.parse(JSON.stringify(obj2));
// obj3.details.age = 90; 

// console.log("new obj3 : ",obj3);

// console.log("old obj2:", obj2);

// let promise1 = Promise.resolve("Promise1"); 
// let promise2 = 23; 
// let promise3 = ((resolve, reject) => {
//    resolve("Promise3");
// })


// let promise = Promise.all([promise1, promise2, promise3]).then((value)=>{
//    console.log(value);
//    return Promise.resolve(value);
// })
//

let sum = 0; 
let ar = [1,2,3,4,5];

let ans = ar.reduce((sum,current)=>{
   return sum+current;
})
console.log(ans);


let a = {};

a.b = "lakki";

console.log(a.keys = "poi");
console.log(a);

function checkIsArray(input) {
   if(Array.isArray(input)){
      return input.reduce((accumulator, item) => accumulator + item)
   }
   else{
      return typeof input;
   }
}

console.log(checkIsArray({a:"12"}));



let input = "Kari is a good boy";
const size = input.length; 
let currentWord = "";
let container = [];

for(let i = size-1; i>=0; i--){
    if(input[i]==" " || i==0){
        let reverseCurrentWord = currentWord.reverse;
        container.push(reverseCurrentWord);
    }
    currentWord+=input[i];
}

console.log(container);


let c = [1,2,3,4,5,6,7,8];
let a = c.splice(2,5);
console.log(c)

