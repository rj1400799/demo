//import React = require("react");

// createElement()
const heading = React.createElement('h1', {}, "React element");

//createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);


let a = {
   b:2,
   c:3
}

function sad({c}){
   console.log(c);
}

sad(a);
