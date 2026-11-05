export {}  // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// Data types in TypeScript
let age = 25;

let size : number = 23

let string : string = "aaqib"

let isLogged : boolean = true

let value: any = "hello"

value = 52;

const url: string = "www.google.com"

// Array 

let array : number[] | undefined | null= undefined

console.log(array)

console.log("hello world")

let myname : string = "Aaqib"

let array1: (string|number)[] | undefined | null = []

array1 = ["hello I am here", 28]
console.log(array1)

let array2: Array<string|number> | undefined | null = []

array2 = ["I am Aaqib", 555]
console.log(array2)


/* Type inference

This is an important TypeScript concept.

You don't always have to explicitly write the type.
let browser = "Chrome";
browser → string    */


// change the last two letters of each word
let str = "I have more than thousand rupees"

let result = str.split(" ").map(word => { if(word.length<2){
    return word
}

    let lastword = word[word.length-1]
    let secondlastword = word[word.length-2]
    return word.slice(0,-2) + lastword + secondlastword;
})
.join(" ")
console.log(result)

// plaindrome check
let str1 : string = "madam"
let panlindrom = str1.split("").reverse().join("") === str1 ? true : false
console.log(panlindrom)

// find the maximum and minimum number in an array
let numbers: Array<number> = [45,75862,4785,58793,2546363,78987,989895]
let maxNumber =Math.max(...numbers)
console.log(maxNumber)
let minNumber = Math.min(...numbers)    
console.log(minNumber)

//odd even numbers
let str3: number[] = [245, 75862, 4785, 58793, 2546363, 78987, 989895]
let oddNumbers = str3.filter(num => num%2 !==0)
console.log(oddNumbers)
let evenNumbers = str3.filter(num => num%2 ===0)
console.log(evenNumbers)

// count vowels in a string
let str4: string = "Typescript"
let vowels: string = "aeiou"
const countVowels = str4.split("").filter(char => vowels.includes(char.toLowerCase())).length
console.log(countVowels)

//remove duplicates
let str5: number[] = [45,58,63,85,45,22,58,63,45,22,78]
let uniqueNumbers = [...new Set(str5)]
console.log(uniqueNumbers)

//find duplicate values

let str6: number[] = [45,58,63,85,45,22,58,63,45,22,78]
let duplicateValues = [...new Set(str6.filter((value, index) => str6.indexOf(value) !== index))]
console.log(duplicateValues)
    
//count the duplicate values

let str7 : number[] = [45,58,63,85,45,22,58,63,45,22,78]
let duplicateCount =str7.reduce((acc: any,value: number) =>{
    acc[value] =(acc[value] || 0) +1
    return acc
},{})
console.log(duplicateCount)

let duplicates = Object.entries(duplicateCount).filter(([key, value]: [string, any]) => value > 1)
console.log(duplicates)

let users = [
    { name: "John", role: "User" },
    { name: "David", role: "Admin" },
    { name: "Sarah", role: "User" }
];
let admins = users.find(value => value.role.toLowerCase() === "admin")
console.log(admins)

let findallUsers = users.filter(value => value.role.toLowerCase() === "user")
console.log(findallUsers)

let names = users.map(value => value.name)
console.log(names)

let anyAdmin = users.some(value => value.role.toLowerCase() === "admin")
console.log(anyAdmin)

let users1 = [
    { name: "John", age: 25 },
    { name: "David", age: 30 },
    { name: "Sarah", age: 17 }
];

let usersAdults = users1.every(value => value.age>= 18)
console.log(usersAdults)

let sorting : { name: string, age: number }[] = users1.sort((a,b) => a.age -b.age)
console.log(sorting)


interface User {
    id : number,
    name: string,
    email?: string,
    isActive: boolean
}

let adminDetails : User[] =[
    {id: 1, name: "Aaqib", email: "aaqib@example.com", isActive: true},
    {id: 2, name: "Ali", isActive: false}
]

console.log(adminDetails)

function PrintStatus (input: "pass" | "fail"): void {
    console.log(input)
}
PrintStatus("pass")

function getFirst<t>(input: t[]): t {
    return input[0] }
    
console.log(getFirst([1, 2, 3]))
console.log(getFirst(["a", "b", "c"]))


let user6 = {
    name : "Aaqib",
    age: 28,
    role : "Admin"
}

let getProperty = <T, k extends keyof T>(object:T, key: k): T[k]=> {
return object[key]
}

console.log(getProperty(user6, "name"))
console.log(getProperty(user6, "age"))

