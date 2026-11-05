export {} // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// Exercise 1
let testResults : string[] = ["pass", "fail", "pass", "pass", "fail"]

console.log(testResults.length) 
console.log(testResults[0]) 
console.log(testResults[testResults.length - 1]) 
testResults[1] = "pass" 
console.log(testResults)

// Exercise 2
let testCases: string[] = ["Login","Search","Add to Cart","Checkout","Logout"];

testCases.unshift("Register")
testCases.push("Payment")
testCases.splice(3,1)
testCases.splice(4,1)
console.log(testCases)

// Exercise 3
let statuses: string[] = ["Pass","Fail","Pass","Fail","Pass"];

statuses.push("Pass")
statuses.splice(1,1)
statuses.unshift("blocked")
console.log(statuses)
console.log(statuses.length)

// Exercise 4
let browsers: string[] = ["Chrome", "Firefox", "Edge", "Safari"];

console.log(browsers.includes("Chrome"))
console.log(browsers.includes("Internet Explorer"))
console.log(browsers.indexOf("Edge"))

if(browsers.includes("Firefox")){
    browsers[browsers.indexOf("Firefox")] = "Brave"
    console.log(browsers)
}