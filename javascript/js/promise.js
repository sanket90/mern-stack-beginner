console.log("Start"); // 1st

const give100INR$ = new Promise((resolve, reject) => {
    resolve("100INR");
});


setTimeout(() => {
    console.log("Set timeout 2000ms"); // 6th
}, 2000)


setTimeout(() => {
    console.log("Set timeout 1ms"); // 5th
}, 1)

console.log("Direct log"); // 2nd


give100INR$.then((money) => console.log(money)) // 4th


console.log("End"); // 3rd


const sub = setInterval(() => {
    
}, 10000);
clearInterval(sub);