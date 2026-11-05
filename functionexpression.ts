export{} //this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

//function expression

let add = function(a:number, b:number): number{ return a+b}

// other way of writing this is 

let add1 =(a:number, b:number): number => a+b

// exercise

let greet = (name:string): string => `Hello, ${name}`
console.log(greet("Aaqib"));

let isEven =(num:number):boolean => num%2 === 0
console.log(isEven(4));
console.log(isEven(7));

let isTestPassed = (testCase: {name: string, status: string}): boolean => {
    if(testCase.status.toLowerCase() === "pass"){
        return true
    }
    return false
}
console.log(isTestPassed({name: "Test 1", status: "pass"}));
console.log(isTestPassed({name: "Test 2", status: "fail"}));

let browsers: string[] = ["Chrome", "Firefox", "Edge", "Safari"];

let printBrowsers =(browsers:string[]): void => {
    for(let browser of browsers){
        console.log(browser);
    }
}

printBrowsers(browsers);

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
let getAdminUsers = (users: {name: string, role: string}[]): {name: string, role: string}[] =>{
    let adminUsers: {name: string, role: string}[] = [];
    for(let user of users){
        if(user.role.toLowerCase() === "admin"){
         adminUsers.push({name: user.name, role: user.role});
        }
    }
    return adminUsers;
}
console.log(getAdminUsers(users));

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

let getFailedTestCases = (testCases: {id: number, name: string, status: string}[]): string[] => {
    let failedTestCases: string[] =[];
    for (let testCase of testCases) {
        if(testCase.status.toLowerCase() === "fail"){
            failedTestCases.push(testCase.name);
        }
    }
    return failedTestCases;
}
console.log(getFailedTestCases(testCases))