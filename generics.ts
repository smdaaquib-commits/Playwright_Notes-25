export{} // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// Generics in TypeScript

// <t> is used to pass any data type to the function, you can use one function to handle multiple data types
// <t> and any are same, but <t> is used to restrict the data type to a specific type,

function check<T>(data:T):T {
    return data;
}

console.log(check("Hello, world!"));
console.log(check(123));

 // array with generics
function getFirst<t>(input: t[]):t { 
    return input[0];
}

let number = getFirst([1, 2, 3, 4, 5]);
console.log(number);

 // arrow function with generics
let lastElement = <t>(input: t[]):t => {  
    return input[input.length - 1];
}
console.log(lastElement([1, 2, 3, 4, 5]));

// function with multiple generics
function twoPair<t, u>(input1: t, input2: u): {input1: t, input2: u} {  
    return {
      input1,
      input2,
    }
}

console.log(twoPair(1, "Hello"));
console.log(twoPair("Hello", 1));

// generics with type

type testCase = {
    id : number,
    name : string,
    status : "pass" | "fail"
}

function getFirstTest<t>(input: t[]): t {
    return input[0];
}

let array : testCase[] =[
    {
        id: 1,
        name: "Test 1",
        status: "pass"
    },
    {
        id: 2,
        name: "Test 2",
        status: "fail"
    }
];

console.log(getFirstTest(array));

let FirstTest = getFirstTest(array)
console.log(FirstTest.name);
console.log(FirstTest.status);


// Generic Constraints  
// used to fetch the object with only the name property, if the object does not have the name property, it will throw an error

function genericConstraint<T extends {name: string}> (input: T): string {   
     return input.name;
}

let user5 = {
    name : "Aaqib",
    age : 25,
    city : "tirunelveli"
}
let user6 = {
    age : 25,
    city : "tirunelveli"
}

console.log(genericConstraint(user5));
// console.log(genericConstraint(user6));  the name property is missing, this will cause a TypeScript error

// generic for multiple types

let genericMulitple = <T extends {id:number}, U >(item: T[], id: U): T | undefined =>{
    return item.find(item => item.id === id)  // find return only the first matching element, if no element is found it will return undefined
}

type TestCase ={
    id : number,
    name : string,
    status : "pass" | "fail"
}

type user ={
    id : number,
    name : string,
    age : number,
    city : string
}

let testCases: TestCase[] =[
    {
        id: 1,
        name: "Test 1",
        status: "pass"
    }
]

let user: user[] =[{
    id: 5,
    name: "Aaqib",
    age: 25,
    city: "tirunelveli"
}]

console.log(genericMulitple(testCases, 1));
console.log(genericMulitple(user, 5));


