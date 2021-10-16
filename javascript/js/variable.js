console.log("VARIABLE")
// VARIABLE

// ES5 = var keyword
var_1 = 10; // Valid

// var var_1; // Valid

function testVar() {
    var_3 = 20;
}
testVar();
console.log(var_3);




// ES6 = let and const

let let_1; // Valid
let_1 = 5;
let_1 = 55;
let_1 = 50;
// let let_1; // Invalid - Cant access 'let' variable before declaration

let let_2 = 15; // Valid
let_2 = 25; // Valid

// let let_3 = 5; // Valid
// let let_3 = 15; // Invalid - Cant declare same 'let' variable more than once

function testLet() {
    let let_4 = 10;
}
console.log(let_4);


// const const_1;
const const_1 = 10; // Valid

// const const_2; // Invalid - Have to initialize 'const' variable at time of declaration
// const_2 = 50; // Invalid

// const const_3 = 40; // Valid
// const_3 = 50; // Invalid - Can not re-intialize 'const' variable



