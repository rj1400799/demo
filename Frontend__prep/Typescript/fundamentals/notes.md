# Typescript 

1. Typescript --> A programming language to address shortcomings of javascript.
2. Typescript is built on js, every js file is a valid ts code.

##Benefits 
1. static typing
2. code completion
3. refactoring 
4. shorthand notations

###Statically-typed
1. we know the type of variables while coding or while compiling.
2. ex: c++, c#, java 


###Dynamically-typed: 
1. Ex: Javascript, Python, Ruby 
2. type is determined at run-time and can be changed anytime.
   
```javascript
let number = 10; 
nuber = "a"; // this variable doesn't have fixed type or static type
```

#Typescript ----> Javascript with type checking 
1. Here we expictly give the type to our variables while declaring 
   and typescript compiler will tell if we are doing anything wrong.

#Drawbacks 
1. Theres always a compilation step involved.
2. Browsers don't understand typescript.
3. Therefore we have to give our ts code to ts compiler to compile and translate into js. (known as Transpilation)


#Installation command:
1. npm i -g typescript (installs typescript compiler)
2. tsc -v (to check which version is installed).

#Typescript is super set of js, it has all the things which are in js plus something
extra.

####compile some file use ---> tsc file.ts

###With typescript we can catch a lot of errors at compile time, we need not run our app or run unit tests.

##ts config, run --> tsc --init

#Compile ts code and run the compiled code command 
- tsc node dist/index.js
- not working for me in this version, i did 
- tsc cmnd first and then node dist/file-name