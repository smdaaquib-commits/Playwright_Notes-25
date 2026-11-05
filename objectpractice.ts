export {} // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// in js adding new property is easy but in ts we have to define the property in the object type before adding it to the object
// only the optional properties can be deleted from the object

let user : {
name:string;
age:number;
email?:string;
isLoggedIn:boolean
role?:string
} = {
name       : "John",
age        : 30,
email      : "john@test.com",
isLoggedIn : true
}
// update property
user.isLoggedIn= false  
console.log(user.isLoggedIn)

// add property
user.role = "QA"  

 // delete property
delete user.email  
console.log(user)

// check the property
console.log("email" in user)  


// Array of objects
let users = [
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 28
    },
    {
        name: "Sarah",
        age: 28
    }
];
    users[1].age = 31
console.log(users[1])

// push new object to the array
users.push({name:"Ali", age: 22})
console.log(users)

// some checks the condition for at least one element in the array and returns true or false
// in cannot be used to check the property in the array of objects
if(users.some(user=> user.age === 28)){
    users.forEach(user => user.age === 28)
}
console.log(users)

