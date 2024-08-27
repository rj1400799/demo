**Remember these points before interview**

1. Don't mess up with data, always try to identify the type if anything goes wrong.
```javascript 
let a = [1,2]
typeof a; //using typeof 
console.log(typeof a) //array
```

2. Check if input is array
```javascript 
Array.isArray(input);
```

3. In react if you pass props, all these props are bundled as an object and sent, therefore always destructure it.

Example:
```javascript
<Question question={input.quest} key={index} />

const Question = ({question, key}) => {} // here we used {} to destructure it.
```