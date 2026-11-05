export{} // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files 

// map -> transforms each element of an array and returns a new array with the transformed elements
// map used with filter to extract the required data from an array of objects

let numbers: number[] = [10,20,30,45,55,65]

let result = numbers.map(num => num*2)
console.log(result);

// filter -> filters the elements of an array based on a condition and returns a new array with the filtered elements
let result2 = numbers.filter(num => num>20)
console.log(result2);

// reduce -> reduces the elements of an array to a single value based on a condition
let result3 = numbers.reduce((total,n)=>total+n,0) //-> initial value
console.log(result3);

let testCases = [
    { name: "Login", status: "Pass" },
    { name: "Search", status: "Fail" },
    { name: "Cart", status: "Pass" },
    { name: "Payment", status: "Fail" }
];

let result4 = testCases.filter(testcase => testcase.status === "Fail")
console.log(result4);

let result5 = testCases.map(testcase => testcase.name)
console.log(result5);

let result6 = testCases.filter(testcase=> testcase.status === "Fail").map(testcase => testcase.name)
console.log(result6);

let result7 = testCases.reduce((total,n)=> total + (n.status === "Fail" ? 1 : 0),0)
console.log("failed test cases: " + result7);

let result8 = testCases.reduce((total,n) => total + (n.status === "Pass"? 1 : 0),0)
console.log("passed test cases: " + result8);

let testCases1 = [
    { id: 1, name: "Login", status: "Pass", duration: 2 },
    { id: 2, name: "Search", status: "Fail", duration: 5 },
    { id: 3, name: "Cart", status: "Pass", duration: 3 },
    { id: 4, name: "Payment", status: "Fail", duration: 8 },
    { id: 5, name: "Logout", status: "Pass", duration: 2 }
];

let result9 = testCases1.filter(testcase => testcase.status.toLowerCase() === "fail")
console.log(result9);

let result10 = testCases1.map(testcase => testcase.name)
console.log(result10);

let result11 = testCases1.filter(testcase => testcase.status.toLowerCase() === "fail").map(testcase => testcase.name)
console.log(result11);

let result12 = testCases1.reduce((total,n) => total + (n.duration),0)
console.log(result12);

let result13 = testCases1.reduce((total,n) => total + (n.status.toLowerCase() === "pass" ? 1 : 0),0)
console.log("passed test cases: " + result13);