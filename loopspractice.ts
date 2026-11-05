export {}; // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for loop, use when we need the index

let browsers: string[] = ["Chrome", "Firefox", "Edge", "Safari"];

for (let i = 0; i < browsers.length; i++) {
  console.log(browsers[i]);
}

//for of in array
//for loop gives the index value but for of gives the value of the array

for (let browser of browsers) {
  console.log(browser);
}

// for in loop in array
//for in loop gives the index value of the array

let fruits: string[] = ["apple", "banana", "mango", "grapes", "kiwi"];

for (let check in fruits) {
  console.log(check);
}

// for in loop in object
let names: { [key: string]: string | number } = 
  {
    name: "aaqib",
    age: 28,
  }

for (let name in names){
    console.log(names[name])
}


// Loops practice

let browsing : Array<string> = ["Chrome", "Firefox", "Edge", "Safari"];

for (let i =0; i< browsing.length; i++){
    if(browsing[i].toLowerCase() === "edge"){
        console.log(browsing[i])
    }
}


let testresults : string[] = ["pass", "fail", "pass", "pass", "fail"];
let failcount : number = 0;

for (let i = 0; i< testresults.length; i++){
    if(testresults[i] === "fail"){
        failcount++
    }
}
console.log(failcount);


let users = [
    {
        name: "John",
        role: "Admin"
    },
    {
        name: "David",
        role: "Tester"
    },
    {
        name: "Sarah",
        role: "Admin"
    }
];
for(let user in users){
    console.log(users[user].name)
}
for (let user of users){
    if(user.role === "Admin"){
        console.log(user.name)
    }
}

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
let failCount : number = 0;

for(let i=0; i<testCases.length; i++){
    console.log(testCases[i].name)}

for(let testcase of testCases){
    if(testcase.status === "Fail"){
        console.log(testcase.name)
        failCount++
    }
}
console.log(failCount);

