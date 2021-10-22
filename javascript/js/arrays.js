const arrOne = [56, 78, 12];

const arrTwo = new Array();
arrTwo.push(56);
arrTwo.push(78);

// Not Recommended
// Mutable
let arrThree = []; // HexAB1234
arrThree.push(56);
arrThree.push(78);


// Recommended
// Immutable
// Spread Operator
arrThree = [...arrThree, 12]; // HexAB5678 [{56, 78}, 12] => [56, 78, 12]
arrThree = [...arrThree, 90]; // HexAB3456
// HexAB3456 [56, 78, 12, 90]

arrThree = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; // HexAB9012


const evenNoLessThan10SquaredStr = arrThree // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    .filter(item =>  item % 2 === 0) // [2,4,6,8,10,12,14]
    .filter(item => item < 10) // [2,4,6,8]
    .map(item => item * item) // [4, 16, 36, 64]
    .join(", ") // "4, 16, 36, 64"

