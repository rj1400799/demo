//charAt(index)
let name = "laxman";
console.log(name.charAt(5)) //n

//string1.concat(string2)
let firstName = "kari";
let lastName = "laxman";
console.log(firstName.concat(lastName)); //karilaxman

//slice(startIndex, endIndex)
//endIndex value isn't included
let a = "Hello world";
let ans = a.slice(0,5);
console.log(ans); //Hello

//substring()
let b = a.substring(5,a.length);
console.log(b) // " world" //space also included
let q = a.substring(6);
console.log(q) // start index to last

//toLowerCase
console.log(a.toLowerCase())

//toUpperCase 
console.log(a.toUpperCase());

//indexOf()
console.log(a.indexOf('o')) // 4 

//lastIndexOf
console.log(a.lastIndexOf('o')) // 7

//split()
let stringNames = "laxman rahul pant ricky shaw";
let namesList = stringNames.split(" ");
console.log(namesList); //['laxman', 'rahul', 'pant', ....]

//trim() 
//removes space at both ends
let str = "  hello world    ";
console.log(str.trim()); //"hello world"


//substr(startIndex, noOfCharacters)
let a1 = "laxman kari is a good boy";
console.log(a1.substr(7,9)) // kari is a

//reverse a string 
let input = "Hello lakki";
input = input.split('').reverse().join(''); // ikkal olleH



