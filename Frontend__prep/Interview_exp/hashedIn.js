//(cleared)

// Find the Factorial of a large number

// basic one
// let number = 20; 
// let factorialResult = 1; 

// while(number) {
//     factorialResult = factorialResult * number; 
//     number --; 
// }

// console.log(factorialResult); 


let number = 45; 
let factorialResult = 1; 

// [1, 2 , 6];
// while(number) {
//     factorialResult = factorialResult * number; 
//     number --; 
// }

// let container = [1];
// //pop();
// for(let i = 2 ; i<=number;i++){
//     let lastValue = container.pop();
//     let temp = i*lastValue; 
//     container.push(temp);
//    // console.log(container);
// }

// console.log(container.pop()); 

// Input-Bangalore is Capital of Karnataka

// Output-Karnataka of Capital is Bangalore



let input = "Bangalore is Capital of Karnataka";
let container = [];
// expected output : Karnataka of Capital is Bangalore


let size = input.length;
let formString = "";
for(let i=0;i<size;i++){
    if(input[i] !== " "){
        formString = formString + input[i];
        console.log("formedString :", formString);
    }
    else {
        container.push(formString);
        //console.log(container.shift(formString));
        console.log("container", container);
        formString = "";
    }
    if(i === size - 1){
        container.push(formString);
    }
}
let reversedContainer = container.reverse();
console.log(reversedContainer);

const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b(); // "foo"
c(); // undefined


let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y); // false (these two arrays are different, it checks for it's reference in memory)
console.log(x === y); // false (same as above)
console.log(z == y); // true (both refer to same array)
console.log(z == x); // false 


import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAdditionOfItems = (e) => {
    e.preventDefault();
    let currentItemToBeAdded = inputValue;
    setItems([...items, currentItemToBeAdded]);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>TO DO APPLICATION</h1>
      <div>
        {" "}
        <form>
          {" "}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add item"
          />
          <button onClick={(e) => handleAdditionOfItems(e)}>Add </button>
        </form>
        <div>
          {items.map((item) => (
            <div>{item} </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//to do app
let a = {
    b:1,
    c:3
}

function sum({c}){
    console.log(c);
}

sum(a);

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState({ a: 2, b: 4 });
  const [items, setItems] = useState([]);

  const useDestructure = (obj, b) => {
    return obj.b;
  };

  const ans = useDestructure(inputValue, "b");

  return <div className="App">{ans}</div>;
}

//to do app

//custom hook - destructure

//useDestructure()



