export {} // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// let str : string = "I am an engineer"
// let reverse : string = ""

// for (let i = str.length-1; i>=0; i--){
//     reverse = reverse + str[i]
// }
// console.log(reverse)

// let reverseArray : string[] | string = str.split(" ")
// reverseArray = reverseArray.reverse().join(" ")
// console.log(reverseArray)

// practice

let word1 : string = "Aaqib"
let reverse : string | number =""
for(let i = word1.length-1; i>=0; i--){
    reverse = reverse + word1[i]
}
console.log(reverse)

let results = ["pass", "fail", "pass", "fail", "pass", "fail"]
let passCount : number = results.reduce((total,n) => total + (n ==="pass"? 1:0),0)
let failCount : number = results.reduce((total,n) => total + (n ==="fail"? 1:0),0)
console.log(`pass count: ${passCount}, fail count: ${failCount}`)

let users = ["Chrome", "Firefox", "Edge", "Safari"]
for(let i=0 ; i<users.length; i++){
if(users[i].includes("a") || users[i] === "Edge")
    console.log(users[i])
}

let employees = [
  { name: "Ali", role: "Admin" },
  { name: "John", role: "Tester" },
  { name: "Sara", role: "Admin" }
]

for ( let employee of employees){
    if ( employee.role === "Admin"){
        console.log(employee.name)
    }   }

    let testCases = [
  { name: "Login", status: "Pass" },
  { name: "Search", status: "Fail" },
  { name: "Checkout", status: "Pass" },
  { name: "Logout", status: "Fail" }
]

for(let i=0; i<testCases.length; i++){
let failCount : number = 0
if(testCases[i].status === "Fail"){
    failCount++
    console.log(testCases[i].name)
}
}

let user = {
  name: "Aaqib",
  age: 28,
  email: "aaqib@test.com" as string | undefined,
  isLoggedIn: true,
  role: ""
}

user.age = 29;
user.role = "Admin"; // adding new property to the object
delete user.email; // deleting the property from the object
"email" in user ? console.log(user.email) : 0
console.log(user)

let users1 : { name: string; age: number; role: string }[] = [
    {
        name : "Aaqib",
        age: 28,
        role : "software engineer",
    },
    {
        name : "Ali",
        age: 30,
        role : "QA"
    },
    {
        name : "Sara",
        age: 25,
        role : "developer"
    }
]
users1[1].age= 28
for(let age of users1){
    if (age.age >=25){
        console.log(age.name)
    }
}
users1.push({name:"David", age: 32, role: "manager"})
console.log(users1)

function addNum(input1 : number, input2: number): number {
    return input1 + input2
}
console.log(addNum(5, 10))

function getFailedTestCases (TestCases: {name: string, status:string}[]):string[]{
return TestCases.filter(testCase => testCase.status === "Fail").map(testCase => testCase.name)
}
console.log(getFailedTestCases([{name: "Login", status: "Pass"}, {name: "Search", status: "Fail"}, {name: "Checkout", status: "Pass"}, {name: "Logout", status: "Fail"}]))

let greet =(name: string): string =>{
    return name
}
console.log(greet("Aaqib"))

let isEven =(num: number): boolean =>{
    return num % 2 === 0
}   
console.log(isEven(5))

let printArray = (arr: (number | string)[]): (number | string)[] =>{
    return arr
}
console.log(printArray([1,2,3,"aaqib", "ali"]))

let getAdminUsers = (users:{name: string, role: string}[]): string[] =>{
    return users.filter(user => user.role === "Admin").map(user => user.name)
}
console.log(getAdminUsers([{name: "Aaqib", role: "Admin"}, {name: "Ali", role: "QA"}, {name: "Sara", role: "Admin"}]))


class User {
    name : string;
    role : string;
    city : string;

    constructor(name: string, role: string){
        this.name = name;
        this.role = role;
        this.city = "Chennai"
    }
    showInfo(): void {
        console.log(`name: ${this.name}, role: ${this.role}, city: ${this.city }`)
    }
}

let user3 = new User("Aaqib", "Admin")
let user4 = new User("Ali", "QA")

user3.showInfo()

class employee{
    private name: string;
    protected salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }
}

class manager extends employee{
    constructor(name: string, salary: number){
        super(name, salary);
    }

    openManagerSalary(){
        console.log(this.salary)
    }
}

let manager1 = new manager("Aaqib", 50000)
console.log(manager1)

manager1.openManagerSalary()

function generics<t>(input: t[]):t[] {
    return input
}

console.log(generics([1,2,3,4,5]))  
console.log(generics(["Aaqib", "Ali", "Sara"]))

function generics1 <T extends {name: string}>(item:T): string {
    return item.name }

console.log(generics1({name: "Aaqib", age: 28, city: "Chennai"}))

function generics2 <T extends {id:number},U>(item:T[], id:U): T|undefined {
    return item.find(item =>item.id === id)
}

let user5 =[
    {
        id: 1,
        name: "Aaqib",
        age: 28,
    },
    {
        id: 2,
        name: "Ali",
        age: 30,
    }
]

console.log(generics2(user5, 1)?.name)


let numbers5 : number[] = [1,2,3,4,5]

let numbers6 = numbers5.map(item=>item*2)
console.log(numbers6)

let people = [
  { name: "Ali", age: 19 },
  { name: "Sara", age: 26 },
  { name: "John", age: 31 }
]


let adults = people.filter(person => person.age>18).map(person => person.name)
console.log(adults)

let total = numbers5.reduce((total,n) => total + n,0)
console.log(total)


type TestCase = {
    id : number;
    name: string;
    status: "Pass" | "Fail" | "Blocked";
    priority: "Low" | "Medium" | "High";
}

let testcase : TestCase[] =[{
    id: 1,
    name: "Test Case 1",
    status: "Pass",
    priority: "High"
},
{
    id: 2,
    name: "Test Case 2",
    status: "Fail",
    priority: "Medium"
},
{
    id: 3,
    name: "Test Case 3",
    status: "Fail",
    priority: "Low"
}
]

function failedTestCases( testcases: TestCase[]): string[]{
return testcases.filter(testcase =>testcase.status === "Fail").map(n=>n.name)
}

function failedtestcount(testcases: TestCase[]): number {
    return testcases.reduce((total,n) => total + (n.status === "Fail"? 1: 0),0)
}

function generics4 <T extends {id:number}>(item:T[], id:number): T|undefined {
    return item.find(item =>item.id === id)
}

let high = []
for(let highpriority of testcase){
    if(highpriority.priority === "High" && highpriority.status === "Fail"){
        high.push(highpriority.name)
    }
}
console.log(high)

console.log(failedTestCases(testcase))
console.log(failedtestcount(testcase))
console.log(generics4(testcase, 2)?.name)


