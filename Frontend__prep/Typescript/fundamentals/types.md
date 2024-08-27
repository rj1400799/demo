#In Js we have: 
1. number 
2. string
3. boolean
4. null
5. undefined
6. object 

#In TS we have this above list plus below
1. any
2. unknown 
3. never 
4. enum
5. tuple

##Let's play with primitive types in js

```typescript 
```

```typescript 
let sales: number = 123_456_789; 
let course: string = 'Typescript'; //we are annotating, saying it's a string
let is_published: boolean = true;
```

#We need not explictly annotate (means to tell it's type always), ts compiler can infer/detect the variable's type.


```typescript 
let b; // ts compiler assumes this variable is of type any
```

```typescript 
// any type 
let a; 
```

