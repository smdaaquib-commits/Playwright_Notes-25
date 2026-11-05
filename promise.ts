export{} // this is mentioned to separate the file from global scope , so the variables declared in this file will not be accessible in other files

// A Promise represents a value that we don't have yet, but will get later.
// a promise is called with only help of then() and catch() methods

let promise = new Promise((resolve, reject) =>{
    resolve("Promise resolved successfully");
    reject("Promise rejected");
})

promise.then((status) =>{
    console.log(status);
});

promise.catch((error)
 =>{
    console.log(error); 
})

// function with promise
function getscore(input: number) : Promise<string> {
    return new Promise((resolve, reject) =>{
        if(input>80){
            resolve("You passed the test");
        } else
        {
            reject("You failed the test");
        }
    })

}

getscore(90).then((message) =>{
    console.log(message);
}).catch((error) =>{
    console.log(error);
})

// another method to call promises instead of then() and catch() is async and await
// async is asychronous function, it returns a promise, and await is used to wait for the promise to resolve or reject
function  getUsername() : Promise<string> {
    return new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Aaqib"), 2000);
    })
}

async function getUser() : Promise<void> {
    let username = await getUsername();
    console.log(username);
}

getUser();

function wait(): Promise<string>{
return new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Promise resolved after 3 seconds"), 3000);
})
}

async function result() : Promise<void> {
    let message = await wait()
    console.log(message);
}
result();

// when you are dealing with positive or negative scenarios, you can use try and catch block to handle the promise
// it is called as error handling

function TestCases(): Promise<string> {
    return new Promise((resolve,reject) =>{
        let number: number = 10;
        
        if(number > 5){
            resolve("Test cases passed");
        } else {
            reject("Test cases failed");
        }
    });
}

async function handling(): Promise<void> {
    try{
        const result = await TestCases();
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}
handling();


function promiseCheck(input: string): Promise<string> {
    return new Promise((resolve,reject) => 
        { if(input === "Aaqib"){
    resolve("Promise resolved successfully");
} else {
    reject("Promise rejected");
}}  )
}

async function clear() : Promise<void> {
    try {
        const result = await promiseCheck("Rakesh");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

clear()