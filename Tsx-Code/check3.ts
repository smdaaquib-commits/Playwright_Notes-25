let num = 12345
let split = num.toString().split('').reverse().join('');
console.log(split);

// or

for(let i = num.toString().length - 1; i >= 0; i--) {
    console.log(num.toString()[i]);
}

let word = "madam"
let reversedWord = word.split('').reverse().join('');
if(word === reversedWord) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}

// find vowels

let text = "TypeScript Programming";
let vowels = "aeiou"
let result = text.split('').filter(v => vowels.includes(v.toLowerCase())).length
console.log(result);

// find factorial

function factorial(n:number): number {
    let result =1;
    for(let i =1; i<=n; i++){
        result *= i
    }
    return result;
}
console.log(factorial(5));

//fizzBuzz

// for(let i =1; i<=20; i++){
// if(i%3 === 0 && i%5 === 0) {
//     console.log("FizzBuzz");
// } else if(i%3 === 0) {
//     console.log("Fizz");
// } else if(i%5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(i);
// }
// }

let sentence = "I am learning automation testing";
let words = sentence.split(' ');
let longestWord = words[0];

for(let i = 1; i < words.length; i++) {
    if(words[i].length>longestWord.length) {
        longestWord = words[i];
    }
}
console.log(longestWord);

//remove
let numbers = [1, 2, 2, 3, 4, 4, 5];
let removeDuplicates = [...new Set(numbers)]
console.log(removeDuplicates);

// finding the missing number
let numbers2 = [1, 2, 3, 5, 6, 7];

let missingNumber = 0
for(let i = 1; i <= numbers2.length + 1; i++) {
    if(!numbers2.includes(i)){
        missingNumber =i
    }
}
console.log(missingNumber);

//move all zeros to end
let numbers3 = [0, 1, 0, 3, 12];
let nonzeroCount = numbers3.filter(n=>n!==0)
let zeroCount = numbers3.filter(n => n === 0)
let result2 = nonzeroCount.concat(zeroCount)
console.log(result2);

//find common elements
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];
let common = a.filter(v => b.includes(v))
console.log(common);

//Find the second-smallest distinct number
let numbers4 = [8, 3, 1, 3, 5, 1, 9];
let distinctnumber = [...new Set(numbers4)];
let secondSmallest = distinctnumber.sort((a, b) => a - b)[1];
console.log(secondSmallest);

// split even and odd numbers
let numbers5 = [1, 2, 3, 4, 5, 6];
let splitEvenOdd = {
    even: numbers5.filter(n => n % 2 === 0),
    odd: numbers5.filter(n => n % 2 !== 0)
}
console.log(splitEvenOdd);

//calculate
let prices = [199, 299, 499, 100];
let total = prices.reduce((acc,n)=> acc+n,0)
console.log(total);

// get active users
let users = [
  { name: "John", active: true },
  { name: "David", active: false },
  { name: "Mike", active: true }
];

let activeUsers = users.filter(user => user.active);
console.log(activeUsers);

//increase salaries by 10%
let salaries = [30000, 40000, 50000];
let increasedSalary = salaries.map(n => n * 10 / 100 + n)
console.log(increasedSalary);

//Count each using map
let text1 = "aabccc";
let counteachletter = new Map<string, number>();
for(let char of text1) {
    if(counteachletter.has(char)) {
        counteachletter.set(char, counteachletter.get(char)! +1);
    } else {
        counteachletter.set(char, 1);
    }
}
console.log(counteachletter);

//first non reapeating character
let text3 = "aabbcdeff";
let nonRepeating = text3.split('').find(char => text3.indexOf(char) === text3.lastIndexOf(char) ? char : null)
console.log(nonRepeating);

let tests5 = [
  { name: "Login", status: "Pass" },
  { name: "Search", status: "Fail" },
  { name: "Logout", status: "Pass" },
  { name: "Checkout", status: "Fail" }
];

let group = new Map<string, string[]>();
for(let test of tests5) {
    if(group.has(test.status)){
        group.get(test.status)!.push(test.name);
    }else{
        group.set(test.status, [test.name])
    }
}
console.log(group);

type Status = "Pass" | "Fail" | "Blocked";

function isPassed(input:Status): string{
return input === "Pass" ? "Passed" : input === "Blocked" ? "Blocked" : "Not Passed";
}
console.log(isPassed("Pass"));

function caluclatedDiscount(price: number, percentage: number): number{
    return (price - (price * percentage / 100));
}
console.log(caluclatedDiscount(100, 10));

interface Account {
    accno: number;
    bank : string;
}

let account: Account[] =[
    {
        accno: 12345,
        bank: "Bank A"
    },
    {
        accno: 67890,
        bank: "Bank B"
    }
]

console.log(account);


interface reporter {
    message: string;
    report(): void;
}

class consoleReporter implements reporter {
    message: string;
    constructor(message: string) {
        this.message = message;
    }

    report(): void {
        console.log(this.message);
    }
}

let reporterInstance = new consoleReporter("This is a test message");
reporterInstance.report();

//generics

function getLast<t>(items:t[]): t | undefined {
    return items[items.length - 1];
}
console.log(getLast([1, 2, 3]));
console.log(getLast(["a", "b", "c"]));
console.log(getLast([]));


function findByID<T extends {id: number}>(items: T[], id: number): T | undefined {
    return items.find(item=> item.id === id)
}
let Values1 =[
    {
        id: 1,
        name: "Alice"
    }, 
    {
        id: 2,
        name: "Bob"
    }
]

console.log(findByID(Values1, 2));

let tests = [
  { name: "Login", status: "Pass", duration: 1200 },
  { name: "Search", status: "Fail", duration: 2500 },
  { name: "Checkout", status: "Pass", duration: 1800 },
  { name: "Logout", status: "Fail", duration: 900 },
  { name: "Profile", status: "Pass", duration: 1500 }
];

let failedTestCases = tests.filter(test => test.status === "Fail");
console.log(failedTestCases);

let passedTestCases = tests.filter(test => test.status === "Pass");
console.log(passedTestCases);

let test3 = tests.filter(test => test.duration>1500)
console.log(test3);

let totalDuration = tests.reduce((acc,n)=> acc + n.duration, 0)
console.log(totalDuration);

let slowestDuration = tests.filter(test => test.duration === Math.min(...tests.map(test => test.duration))).map(test => test.name)
console.log(slowestDuration);

let responses = [
  { endpoint: "/login", status: 200 },
  { endpoint: "/users", status: 200 },
  { endpoint: "/checkout", status: 500 }
];

function passed(input:{endpoint: string, status: number}[]): boolean{
     if(input.every(status => status.status === 200)){
         return true;
     }
     return false;
}
console.log(passed(responses));

interface response<T> {
    id : number;
    endpoint: string
    data : T
}

interface userData{
    id: number;
    name: string;
}


let userResponse : response<userData>[] = [
    {
        id: 1,
        endpoint: "/users",
        data: {
            id: 1,
            name: "Alice"
        }
    },
    {
        id: 2,
        endpoint: "/users",
        data: {
            id: 2,
            name: "Bob"
        }
    }
];

function checkID(id: number): boolean {
    return userResponse.some(response => typeof response.data.id === "number" && response.data.id === id);
}
console.log(checkID(1));

//compare two arrays

let expected = ["Home", "Products", "Contact"];
let actual = ["Home", "Products", "About"];

let missing = expected.filter(item => !actual.includes(item));
console.log(missing);

let unexpected = actual.filter(item => expected.indexOf(item) === -1);
console.log(unexpected);

function mockOperation(): Promise<string> {
  return new Promise((resolve) => resolve("Success!"))  ;
}

async function retryOperation(): Promise<string> {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await mockOperation();
      return result;
    } catch (error) {
      if (attempt === 3) {
        throw new Error("All 3 attempts failed");
      }
      console.log(`Attempt ${attempt} failed. Retrying...`);
    }
  }
  throw new Error("Operation failed");
}

retryOperation()
  .then(result => console.log(result))
  .catch(error => console.log(error.message));


  interface users4{
    name: string;
    email: string;
    role: string;
  }

  let userDetails : users4 = {
    name: "Aaqib",
    email: "aaqib@example.com",
    role: "admin"
  }

  function checkObjectHasValues (input: {name:string, email: string, role: string}): boolean {
    return input.name !== "" && input.email !== "" && input.role !== "";
  }
  console.log(checkObjectHasValues(userDetails));

  // reverse only the values not the length

  let test6 = "I am an Automation Engineer"
  let split1 = test6.split(" ")
  let reversed =""
for(let i=0; i< split1.length; i++){
      let reverse =""
for(let j=split1[i].length - 1; j >= 0; j--){
  
    reverse = reverse + split1[i][j];
}
reversed = reversed + reverse + " ";
}
console.log(reversed.trim())


// find distinct and duplicate values in an array and count of the duplicates

let example = [10,12,10,45,85,65,85,72,12,98,32]

let distinct = [...new Set(example)]
let findDuplicates = example.filter((Value, index) => example.indexOf(Value) !==index) 
let duplicatesCount = example.reduce<Record<number, number>>((acc, value) =>{
    acc[value] =(acc[value] || 0)+1;
    return acc;
}, {} as Record<number, number>);

let keyvalues = Object.entries(duplicatesCount).filter(([key, value]) => value >= 2)

console.log(distinct)
console.log(findDuplicates)
console.log(duplicatesCount)
console.log(keyvalues)
