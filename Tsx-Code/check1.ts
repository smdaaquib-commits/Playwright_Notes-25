// reverse only the words not the sentence
let a: string = "I have an apple with me"
let word : string[] = a.split(' ')
let reversedSentence =""
for(let i=0; i<word.length; i++){
    let reversedword : string =""
    
for(let j=word[i].length-1; j>=0; j--){
    reversedword = reversedword + word[i][j]
}
reversedSentence = reversedSentence + reversedword + " "
}
console.log(reversedSentence);

let numbers: number[] = [10,48,52,45,32,78,56,85]
let result = Math.max(...numbers)
console.log(result);

let secondlargest = numbers.sort((a,b)=> b-a)[1]
console.log(secondlargest);

// second largest number  using loop
let numberss: number[] = [10,48,52,45,32,78,56,85]
let largest = -Infinity
let secondLargest = -Infinity

for(let i=0; i<numberss.length ; i++){
if(numberss[i]>largest){
    secondLargest = largest
    largest = numberss[i]
}
if(numberss[i] > secondLargest && numberss[i] < largest){
    secondLargest = numberss[i]
}
}
console.log(secondLargest)
//remove duplicates
let number : number[] = [56,45,78,89,12,23,32,21,56,78,98,12, 56]
let removeDuplicates = [...new Set(number)]
console.log(removeDuplicates);

//find duplicates
let findDuplicates = [...new Set(number.filter((item,index) =>number.indexOf(item)!==index))]
console.log(findDuplicates);

//count duplicates
let countduplicates = number.reduce((acc: Record<number, number>, cur: number) =>{
       acc[cur] = (acc[cur] || 0) +1
return acc
}, {})

let results = Object.entries(countduplicates).filter(([key, value]) => value > 1)
console.log(result);

// find th index of 3rd apple

let fruits = ["apple", "banana", "apple", "orange", "apple", "grape"]
let count = 0
for(let i=0; i<= fruits.length-1; i++){
if(fruits[i] === "apple"){
    count++
} if(count===3){
    console.log(i);
    break;
}
}   

let numbers1 = [10,15,25,32,30,48,65,21,30,30]
let result1 = numbers1.filter(num => num>20)
console.log(result1)

let result2 = numbers1.find(num => num===30)
console.log(result2);

let result3 = numbers1.some(num => num%2 === 0)
console.log(result3);

let result4 = numbers1.every(num => num>5)
console.log(result4)

let users = [
    { id: 101, name: "John", role: "QA" },
    { id: 102, name: "David", role: "Developer" },
    { id: 103, name: "Mike", role: "QA" }
];

let result5 = users.find(user => user.id ===103)
console.log(result5);
let result6 = users.filter(user => user.role ==="QA")
console.log(result6);
let results7 = users.map(user => user.name)
console.log(results7);

interface User {
    id : number,
    name: string,
    status : "Pass" | "Fail" | "Blocked"
}

let result8 : User[] =[
    {
        id: 1,
        name: "Alice",
        status: "Pass"
    },
    {
        id: 2,
        name: "Bob",
        status: "Fail"
    },
    {
        id: 3,
        name: "Charlie",
        status: "Blocked"
    }
]

function getUserBystatus(input:string): string[] {
    return result8.filter(user => user.status === input).map(user => user.name)
}
console.log(getUserBystatus("Pass"))
console.log(getUserBystatus("Fail"))
console.log(getUserBystatus("Blocked"))

function isTestCasePassed(input:User[]): boolean {
    return input.some(user => user.status === "Pass")
}
console.log(isTestCasePassed(result8))

function getFirst<T>(input:T[]): T {
    return input[0]
}

console.log(getFirst([1, 2, 3]))
console.log(getFirst(["apple", "banana", "cherry"]))

let numbers2 = [10, 20, 30, 20, 40, 10, 50, 20];

let result9 = [...new Set(numbers2.filter((value,key)=> numbers2.indexOf(value)!==key))]
console.log(result9);

let result10 = numbers2.reduce((acc: Record<number, number>, value: number) => {
    acc[value] = (acc[value] || 0) + 1
    return acc
}, {})
console.log(result10);

let result11 = Object.entries(result10).filter(([key,value]) => value>1) 
console.log(result11)

let getfirstgeneric = <T>(input:T[]):T =>{
return input[input.length - 1]
}
console.log(getfirstgeneric([1, 2, 3]))

let users1 ={
name : "aaqib",
age : 28,
city: "tirunelveli"
}

function getProperty<T, K extends keyof T>(object:T, key:K){
    return object[key]
}
console.log(getProperty(users1, "age"))

function twoValues<T, U>(a:T, b:U): [T,U] {
    return [a,b]
}
console.log(twoValues("Aaqib", 28))

interface UserResponse {
    id: number,
    name: string
}


interface apiResponse<T> {
    status: number,
    data: T
}

const userResponse0: apiResponse<UserResponse[]> = {
    status: 200,
    data: [
        {
            id: 1,
            name: "Aaqib"
        },
        {
            id: 2,
            name: "Rakesh"
        }
    ]
}
console.log(userResponse0)

function recordsCheck(data: UserResponse0[]): void {
    console.log(data.every(item => item.hasOwnProperty("id") && item.hasOwnProperty("name")))
}

recordsCheck(userResponse0.data)


let sampleData = [
    {id: 1, name: "Aaqib", age: 28},
    {id: 2, name: "Rakesh", age: 30},
    {id: 1, name: "Charlie", age: 25},
    {id: 2, name: "Rakama", age: 30}
]

function getDuplicateID (Data :{id: number, name: string, age: number}[]): number[] {
 return Data.filter((value,index)=> Data.findIndex(item =>item.id === value.id) !==index).map(item => item.id)
}

console.log(getDuplicateID(sampleData))

interface Users2<T> {
    name: string
    age: number
    Data: T
}

interface apiResponse2{
    status: string
    message: string
}

const userResponse2 : Users2<apiResponse2>[] = [
    {
        name: "Aaqib",
        age: 28,
        Data: {
            status: "Active",
            message: "User data retrieved successfully"
        }
    },
    {
        name: "Rakesh",
        age: 30,
        Data: {
            status: "Inactive",
            message: "User data not available"
        }
    },
    {
        name: "Charlie",
        age: 25,
        Data: {
            status: "Active",
            message: "User data retrieved successfully"
        }
    }
]

function checkStatus2(data:userResponse2[]): {} {
    return data.filter(item => item.Data.status === "Active")
}

function  validateResponse<T>(data: T[]):Boolean{
    return data.length>0
}

console.log(validateResponse(userResponse2))

console.log(checkStatus2(userResponse2))

function statusCode(input: string): string {
    if(input === "200") {
        return "Success"
    } else if(input === "300") {
        return "Redirect"
    } 
    throw new Error("Invalid status code")
}
// console.log(statusCode("400"))  shows error: Invalid status code

function objectProperty<T, K extends keyof T>(object: T , key:K){
    return object[key]
}

const Users4 ={
name: "xyz",
age: 45
}

console.log(objectProperty(Users4, "name"))