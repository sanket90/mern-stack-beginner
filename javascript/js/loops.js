while (condition) {
    if (case1)
        break;
    else 
        continue;


    // Do Something
}


const arr = [1,2,3,4,5,6,7,8,9,0];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // Do something
}

// Loop over object does not garuntee order of keys
const obj = {
    key1: "value1",
    key2: "value2"
};

for (const key in obj) {
    const value = obj[key];
}


for (const iterator of arr) {
    const element = iterator;
}