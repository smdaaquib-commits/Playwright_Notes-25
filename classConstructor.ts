export{} // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// Class -> blueprint of an object
// class is used handle large amount of data and to create multiple objects of the same type
// A class lets you group data + functions that work on that data:

class person {
    name : string = "";
    age: number = 0;       // normal class
}

let person1 = new person(); // new classname() keyword is used to create an object of the class or instance of the class
person1.name = "Aaqib";
person1.age = 28;
console.log(person1);

// constructor is a special method that is called when an object of the class is created
// it is created to initialize the properties of the object when it is created
// it is like requirement for creating an object of the class

class user {
    name : string;
    dob : string;

    constructor(name: string, dob: string) { // constructor parameters = data required to build a valid instance,
        this.name = name;                    // you can only pass name and then dob to create a valid instance
        this.dob = dob;                      // (name: string) { this.name = name; this.dob = this.name + "Simply"}
    }
    hello(){
        console.log(`Hello, ${this.name}!`)
    }

}

let user1 = new user("Aaqib", "1996-05-15");
console.log(user1.dob);
user1.hello();


//practice

class user2 {
    name : string;
    email: string;
    role: string;


    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.role = "admin";
    }
}

    let newUser = new user2("Aaqib", "aaqib@example.com"); // only the passed arguments are required,
    console.log(newUser);

class car {
    name : string;
    model : string;
constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
}

displayCarInfo(){
    console.log(`Car Name: ${this.name}\nModel: ${this.model}`);
}
}

let car1 = new car("Toyota", "Corolla");
car1.displayCarInfo();

// Protected and Private properties in TypeScript classes

class Employee{
    private name : string;
    protected salary: number

constructor(name: string, salary: number){
    this.name = name;
    this.salary = salary;
}
}
let meuser = new Employee("Aaqib", 50000);
//note: 'name' is private and 'salary' is protected, so they cannot be accessed directly outside the class
// it is not to stop the creating objects, not allowing to access the properties (console)

//protected property can be accessed in the derived class, cannot be accessed outside the class, but can be accessed in the derived class
class manager extends Employee{
    constructor(name: string, salary: number){
        super(name, salary); // super forwards the parameters to the parent class constructor
    }

    openManagerSalary(){
        console.log(this.salary);
    }
}

let manager1 = new manager("Ali", 60000);
manager1.openManagerSalary(); // can access