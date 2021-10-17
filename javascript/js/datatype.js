// Loosly typed language
let uname = "abc";
uname = 15;
uname = false;



// String
let str1 = "String One";
let str2 = 'String Two';

let strConcat = "String Three|" + str1 + "|" + str2;


let strInterpolation = `String Three
|
${str1}
|
${str2}`;

// console.log("type of strConcat", typeof strConcat);
// console.log("type of strInterpolation", typeof strInterpolation);
// console.log("strConcat = ", strConcat);
// console.log("strInterpolation = ", strInterpolation);
// console.log("", str1.toUpperCase());
// console.log(str1.toLowerCase());



// Numbers
let numInt = 1;
let numFloat = 1.5;
let numBig = 10000000000000000n;

// console.log("typeof numInt", numInt, typeof numInt);
// console.log("typeof numFloat", numFloat, typeof numFloat);
// console.log("typeof numBig", numBig, typeof numBig);



// Boolean
let boolTrue = true;
let boolFalse = false;

// console.log("typeof boolTrue", boolTrue, typeof boolTrue);
// console.log("typeof boolFalse", boolFalse, typeof boolFalse);


// Truty or Falsy
// True like or False like
/*
console.log("0 is ", 0 ? "true" : "false", typeof 0); // false boolean => false number
console.log("1 is ", 1 ? "true" : "false", typeof 1); // true boolean => true number
console.log("-1 is ", -1 ? "true" : "false", typeof -1); // true number => true number
console.log("'' is ", '' ? "true" : "false", typeof ''); // true string => false string
console.log("'test' is ", 'test' ? "true" : "false", typeof 'test'); // true string => true string
console.log("'0' is ", '0' ? "true" : "false", typeof '0'); // true string => true string
console.log("{} is ", {} ? "true" : "false", typeof {}); // false => true
console.log("[] is ", [] ? "true" : "false", typeof []); // false => true
console.log("null is ", null ? "true" : "false", typeof null); // false => false
console.log("undefined is ", undefined ? "true" : "false", typeof undefined); // true => false
console.log("NaN is ", NaN ? "true" : "false", typeof NaN); // true => false
*/


let num10 = 10;
let str10 = "10";
/*
console.log(num10 == str10); // False => True
console.log(num10 === str10); // False
console.log(num10 + str10); // 20 => 1010
console.log(num10 + Number(str10)); // 20
console.log(num10 - str10); // 0
console.log(num10 * str10); // 100
console.log(num10 / str10); // 1
*/

let num20 = 20;
let str20a = "20a";
// console.log(num20 * Number(str20a)); // Error => NaN



// null, undefined, void
let letx; // by default undefined
console.log(letx);

let lety = 123123;
// do some operation
lety = null;

// function that returns nothing have return type = void
function testVoid() {
    
}



// Objects
let letObj = {
    name: "Bob",
    age: 15,
    salary: 100000,
    active: true
};

letObj["manager"] = true;
delete letObj["age"];
console.log(letObj);



// Array
let letArr = [1,2,3,4,5];
letArr.push(6);
letArr.splice(3, 4);
console.log(letArr);