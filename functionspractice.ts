export {} // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// function are block of code that can be called multiple times, they are used to perform a specific task, they can take parameters and return values
// function are written and can be called with objects, arrays, strings, numbers, booleans, etc. they can also be called with other functions

// simple function
function greet(){
console.log("Hello, world!");
}
greet();

//function with multiple parameters

function hello(name:string){
    console.log(`Hello, ${name}!`)
}
hello("Aaqib");

function add( a: number, b:number){
    console.log(a+b);
}
add(5, 10);

//function with return type

function addNumbers(a: number, b:number): number{
    return a+b;
}
let result = addNumbers(5, 10);
console.log(result);

//?? exercise

function isEven (num: number): boolean{
    return num%2 === 0;
}
console.log(isEven(10));
console.log(isEven(7)); 

// function with arrays

function printArray(browsers: string[]) {
    for(let browser of browsers){
        console.log(browser);
    }
}
let browsers: string[] = ["Chrome", "Firefox", "Edge", "Safari"];
printArray(browsers);


function countFailure(testResult: string[]){
    let count: number = 0;
    for (let result of testResult){
        if(result==="fail"){
            count++
        }
    }
    console.log(count);
}
let testResults: string[] = ["pass", "fail", "pass", "pass", "fail"];
countFailure(testResults);

function admins(names: { name: string, role: string }[]){
    for(let name of names){
        if(name.role === "admin"){
            console.log(name.name);
        }
    }
}

let names =[
    {name: "Alice", role: "admin"},
    {name: "Bob", role: "user"},
    {name: "Charlie", role: "admin"},
    {name: "David", role: "user"}
];
admins(names);

let testCase = {
    id: 101,
    name: "Login Test",
    status: "Pass"
};

function isTestPassed(testcase: {status: string}): boolean{
    return testcase.status === "Pass";
}
console.log(isTestPassed(testCase));

let testCases = [
    {
        id: 1,
        name: "Login",
        status: "Pass"
    },
    {
        id: 2,
        name: "Search",
        status: "Fail"
    },
    {
        id: 3,
        name: "Checkout",
        status: "Pass"
    },
    {
        id: 4,
        name: "Logout",
        status: "Fail"
    }
];

function getFailedTestCases(testCases: {status: string, name: string}[]): string[]{
    let failedTestCases: string[] = [];
    for(let testcase of testCases){
        if(testcase.status === "Fail"){
            failedTestCases.push(testcase.name)
        }
    }
    return failedTestCases;
}
console.log(getFailedTestCases(testCases))