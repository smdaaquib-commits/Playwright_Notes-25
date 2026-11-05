export{} //this is mentioned to separate the file from global scope , so the variables declared in

// try () -. try the code to execute
// catch() - catch the error if any error occurs in the try block
// finally() - it will be executed whether the try block is successful or not.
// throw error or throw new Error() , return ""- it is used to throw an error manually

let word;
try{
   word = console.log("Hello, world!" + 1234); //.toUpperCase()); // this will throw an error because number does not have toUpperCase() method
}catch(error) {
    console.log("this is not running because there is no error in the try block");
}

try{ 
    console.log("Test execution started");
}catch(error){
    console.log("this is not running because there is no error in the try block");
} finally{
    console.log("Test execution completed")}


let isGreater =(input: number) =>{
    if(input<10){
 throw new Error ("Input is less than 10");
}
return "Input is greater than 10";
}
console.log(isGreater(15));

function login(): Promise<string>{
    return new Promise((resolve, reject) =>{
        let isloggedin = false;
        if(isloggedin){
            resolve("User is logged in");
        }
    else { reject("Invalid Credentials");
    }
    })};

async function loginUser(): Promise<void>{
try{
    const loginStatus = await login();
    console.log(loginStatus);
} catch(error){
    console.log(error);
}
}
loginUser();

function validatetestResult(status: string) {
    if(status !== "pass" && status !== "fail" && status !== "blocked"){
        throw new Error("Invalid test result status");
    } 
    return "Valid test result status";    
}

try{
    console.log(validatetestResult("blocked"));
} catch(error){
    console.log(error);
}       

// apicall
function apicall(input: number): Promise<number | string>{
    return new Promise ((resolve, reject)=>{
       if(input === 200){
        resolve(200)
       }else
       {
        reject("Api call failed")
       }
    });
}

// apirespose
async function apiResponse(): Promise<void>{
    try{
        const response = await apicall(100);
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
apiResponse();