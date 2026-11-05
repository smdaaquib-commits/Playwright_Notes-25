export {} // Ensures this file is treated as a module

// new map & set , get ->  is used to store and manage key-value pairs efficiently
// The biggest advantage is that you can quickly retrieve a value using its key.
//map.set()  // map.get()  // map.has()  // map.delete()  // map.clear()  // map.size

let users = new Map<number, string>();

users.set(25, "Alice");
users.set(30, "Bob");
users.set(35, "Charlie");
console.log(users.get(25));

if (users.has(104)) {
    console.log("the key exists");
}else{
    console.log("the key does not exist");
}

users.delete(35)
console.log(users.has(35)); // should print false
console.log(users.size); // should print 2
console.log(users); // should print the remaining key-value pairs

let sentence = "I am Learning Typescript"
let words = sentence.split(" ")
let reversedSentence = ""
for(let i =0; i<words.length; i++){
    let reverse =""
    for(let j=words[i].length-1; j>=0; j--){
        reverse = reverse + words[i][j] 
    }
    reversedSentence = reversedSentence + reverse +" "
}
console.log(reversedSentence);

let numbers = [10, 45, 23, 89, 67, 89, 12];
let largest = - Infinity
let secondlargest = - Infinity
for(let num = 0; num < numbers.length; num++){
if(numbers[num] > largest){
    secondlargest = largest
    largest = numbers[num]
}else if(numbers[num]> secondlargest && numbers[num] < largest){
    secondlargest = numbers[num]
}
}
console.log(secondlargest)

let numbers2: number[] =[10, 20, 10, 30, 40, 20, 50, 10];
let result : number[] = [...new Set(numbers2.filter((value,index) => numbers2.indexOf(value)!=index))]
console.log(result);

let employees = [
    { name: "John", salary: 50000, role: "QA" },
    { name: "David", salary: 70000, role: "Developer" },
    { name: "Mike", salary: 60000, role: "QA" },
    { name: "Alex", salary: 80000, role: "Developer" }
];

let result2 = employees.filter(value => value.salary>55000 && value.role === "QA").map(value => value.name)
console.log(result2);

let prices = [100, 250, 300, 150, 200];

let totalPrice = prices.reduce((acc,curr)=> acc+curr,0)
console.log(totalPrice)

interface testCase {
    id: number;
    name: string,
    status: "pass"|"failed"|"blocked"
}

function getStatus(testCase:testCase){
    if(testCase.status === "pass"){
        return "The test case has passed.";
    }else if(testCase.status === "failed"){
        return "The test case has failed.";
    }else if(testCase.status === "blocked"){
        return "The test case is blocked.";
    }
    return "unknown status"
}

let testcases: testCase[] = [{
    id: 1,
    name: "Test Case 1",
    status: "pass"
},
{
    id: 2,
    name: "Test Case 2",
    status: "failed"
},
{
    id: 3,
    name: "Test Case 3",
    status: "blocked"
}
];
console.log(testcases.map(getStatus));

function generics<t>(input:t[]):t[]{
    return input
}
console.log(generics([1, 2, 3, 4, 5]));
console.log(generics(["apple", "banana", "cat"]));
console.log(generics([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]));

let users5 = [
    { id: 1, name: "John" },
    { id: 2, name: "David" }
];

let products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mouse" }
];

function generics2<T extends {id: number}>(input:T[], id:number):T|undefined{
    return input.find(item => item.id === id)
}

console.log(generics2(users5,2))
console.log(generics2(products,102))

let testCases5 = [
    { id: 1, name: "Login", status: "Pass", duration: 1200 },
    { id: 2, name: "Search", status: "Fail", duration: 2300 },
    { id: 3, name: "Checkout", status: "Pass", duration: 1800 },
    { id: 4, name: "Logout", status: "Fail", duration: 900 },
    { id: 5, name: "Profile", status: "Pass", duration: 1500 }
];

let failedTestCases = testCases5.filter(testCase => testCase.status === "Fail").map(name => name.name)
console.log(failedTestCases);

let passedTests = testCases5.reduce((acc,n)=> acc + (n.status === "Pass" ? 1 : 0),0)
console.log(passedTests);

let failedTests = testCases5.reduce((acc,n)=> acc + (n.status === "Fail" ? 1 : 0),0)
console.log(failedTests);

let slowesttest = testCases5.find(testCase => testCase.duration === Math.max(...testCases5.map(tc => tc.duration)))
console.log(slowesttest);

let largerDuration = testCases5.filter(tc => tc.duration > 2000).map(tc => tc.name)
console.log(largerDuration);

let totalexecutiontime = testCases5.reduce((acc,n) => acc + n.duration, 0)
console.log(totalexecutiontime);



let text ="aabbcdeff"
let text1 = text.split("")
let nonRepeatingCharacter = text1.find(char => text1.indexOf(char) === text1.lastIndexOf(char))
console.log(nonRepeatingCharacter);
let nonRepeatingCharacters = text1.map(char => text1.indexOf(char) === text1.lastIndexOf(char) ? char : null).filter(char => char !== null)
console.log(nonRepeatingCharacters);

let numbers5 = [10, 20, 10, 30, 20, 40, 30, 50];
let result5: number[] = []
for (let i = 0; i < numbers5.length; i++) {
if(!result5.includes(numbers5[i])){
    result5.push(numbers5[i]);
} 
}
console.log(result5);

let result6 = numbers5.filter((value,index)=> numbers5.indexOf(value) === index)
console.log(result6);
let response = [
    { id: 101, name: "Login", status: 200 },
    { id: 102, name: "Search", status: 200 },
    { id: 103, name: "Checkout", status: 500 },
    { id: 104, name: "Logout", status: 404 }
];

function validateResponse<T>(input: {id:number, name: string, status: number}[]):boolean{
if(input.some(item => item.status === 200)){
    return true;
} else {
    return false;
}
}

console.log(validateResponse(response))
