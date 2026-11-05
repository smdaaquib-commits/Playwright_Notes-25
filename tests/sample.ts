const input = "Sayed@123V";
let split = input.split("");
let firstword= split.slice(0,5).join("")
let secondword = split.slice(5).join("")
console.log(firstword,"\n", secondword)
