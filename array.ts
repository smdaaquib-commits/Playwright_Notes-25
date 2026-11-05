export {}  // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

let array1: string[] | undefined = []

let users: {
    username: string,
    password: string
    email: string
}[] = [ 
    {username: "Aaqib", password: "1234", email: "example1.com"},
    {username: "Ali", password: "1234", email: "example2.com"}
]

console.log(users[1].email)

console.log(users.length)

users.push({username: "Ahmed", password: "1234", email: "example3.com"},  // push -> add to end
    {username: "Adeel", password: "1234", email: "example4.com"}
)

console.log(users)

users.pop()   // pop -> remove from end
console.log(users)

users.shift()  // shift -> remove from start
console.log(users)

users.unshift({username: "rakesh", password: "1234", email: "example5.com"})  // unshift -> add to start
console.log(users)

// IndexOf -> returns the first index at which a given element can be found in the array, or -1 if it is not present. indexOf(searchElement, fromIndex)
let fruits5: string[] = ["apple", "banana", "mango", "grapes", "kiwi"]
console.log(fruits5.indexOf("mango"))
console.log(fruits5.indexOf("orange"))  // returns -1 because orange is not present in the array

// slice -> Extracts a section of an array and returns a new array. slice(start,exclude end)

let fruits : string[] = ["apple", "banana", "mango", "grapes", "kiwi"]

let slice_fruits = fruits.slice(0,2)
console.log(slice_fruits)

let slice_fruits2 = fruits.slice(2,-1)
console.log(slice_fruits2)

//splice -> adds/removes items to/from an array. splice(start, deleteCount, item1, item2, ...)

let fruits1 : string[] = ["apple", "banana", "mango", "grapes", "kiwi"]

fruits1.splice(0,2, "orange", "watermelon")
console.log(fruits1)

// join() -> joins - array to string  join(separator)

let words = ["Hi", "I", "am", "Aaqib"]
console.log(words.join(" "))

//split() -> splits - string to array, split(separator, limit)  -> splits a string into an array of substrings based on a specified separator and returns the new array. The limit parameter is optional and specifies the maximum number of splits to be found.
let str = "Hi I am Aaqib" 
console.log(str.split(" "))

//length -> returns the number of elements in an array

let words1: Array<string> = ["what", "why", "where", "when", "which"]

console.log(words1.length)
console.log(words1[words1.length-1])

// includes() -> checks if an array contains a certain element. includes(searchElement, fromIndex)
console.log(words1.includes("why", 0))

// reverse() -> reverses the order of the elements in an array. reverse()  -> reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.
console.log(words1.reverse())

//.every() is used to check whether ALL elements in an array satisfy a condition. return boolean

let age: number[] = [18, 22, 25, 30, 35]
let isAdult = age.every((age) => age >= 18)
console.log(isAdult)

//.some() is used to check whether AT LEAST ONE element in an array satisfies a condition. return boolean
let hasMinor = age.some((age) => age < 18)
console.log(hasMinor)

//sort() -> sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
let numbers: number[] = [5, 2, 9, 1, 5, 6]
numbers.sort((a,b) => a-b) // ascending order
console.log(numbers)

numbers.sort((a,b) => b-a) // descending order
console.log(numbers)