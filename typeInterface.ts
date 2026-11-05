export{} // this is mentioned to separate the file from the global scope, so the variables declared in this file will not be accessible in other files  

// Type is used to define the shape of an object in TypeScript.
// type cannot be reopened to add new properties or methods
// type is mostly used for primitive types, union types, intersection types, and tuples.
// type us commonly used with unions, literals, type aliases, and tuples.
type user = {
    name: string;
    role: string;
    age: number;
}

let user1 : user = { name : "Aaqib", role : "developer", age : 28}
let user2 : user = { name : "ali", role : "tester", age : 30 }
console .log(user1)

type Qauser = user & {   // extended using intersection type (&)
    isQa: boolean;
}

// interface -> interface is another way to define the shape of an object in TypeScript. It is similar to type, but it can be extended and implemented by classes.
// interface can be reopened to add new properties or methods
// Class can implements an interface but cannot implement a type

interface browserDetails {
    name : string;
    speed : number | string;
    version : number;
}

let browser1 : browserDetails = { name : "Chrome", speed : 100, version : 90}
console.log(browser1)

interface browserDetails1 extends browserDetails { // extended using extends keyword
    isSecure : boolean;
}

// Array of typed objects

interface userDetails {
    name : string;
    id : number;
    address : {
        street: string;
        city : string;
        pincode: number;
        postalcode?: number; // optional property
    }
    readonly country : boolean // readonly property cannot be changed after it is initialized
}

let users: userDetails[] =[
    {
        name: "Aaqib",
        id: 1,
        address: {
            street: "123 Main St",
            city: "Karachi",
            pincode: 12345,
            postalcode: 12345 // optional property
        },
        country: true
    },
    {
        name: "Ali",
        id: 2,
        address: {
            street: "456 Elm St",
            city: "Lahore",
            pincode: 67890,
        },
        country: true
        }
]
users[0].address.city = "Islamabad"
// users.country = false // error: cannot assign to 'country' because it is a read-only property

console.log(users)

interface Test {
    readonly id: number;
    name: string;
    status: "Pass" | "Fail" | "Blocked"; // literal type, can only be one of the specified string values
    priority: "Low" | "Medium" | "High";
}

let testCases: Test[] = [
    {
        id: 1,
        name: "Test Case 1",
        status: "Pass",
        priority: "High",
        date: "2024-06-01"
    },
    {
        id: 2,
        name: "Test Case 2",
        status: "Fail",
        priority: "Medium",
        date: "2024-06-02"
    },
    {
        id: 3,
        name: "Test Case 3",
        status: "Fail",
        priority: "Low",
        date: "2024-06-03"
    }
]

interface Test {
date : string; // reopening the interface to add new property
}

let failedTestCases = testCases.filter(testcase =>testcase.status === "Fail").map(n=>n.name)
let totalfailed = testCases.reduce((total,n) => total + (n.status === "Fail"? 1: 0),0)
console.log(failedTestCases + "\n" + " total failed test cases: " + totalfailed)

for (let n of testCases){
    if(n.status === "Fail"){
        console.log(n.date)
    }
}
