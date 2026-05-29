
let age = 20;
// Assignment operators::

// age += 10; // 30
// age -= 5; // 15
// age *= 2; // 40
// age /= 2;  // 10
// age %= 3; // 2



// Arithmetic Operators ::

let num1 = 20;
let num2 = 30;
/*
console.log('Sum of num1 and num2 is :: ', (num1 + num2)); // 50
console.log('Difference of num2 and num1 is :: ', (num2 - num1)); // 10
console.log('Product of num1 and num2 is :: ', (num1 * num2));
console.log('Division is :: ', num2 / 2); // 15
console.log('Modulous is :: ', num2 % 3); // 0
*/

// console.log(num1++); // num1 = num1 + 1;
// console.log(num1); // 21
// console.log(++num1); // 21

// console.log(--num1); // 19 num1 = num1 - 1;

// console.log(num1--); // 20
// console.log(num1); 19


// 100 > 50 --- true
// 50 < 100 --- true

let a = true;
let b = false;


function logicalAND() {

    console.log("AND && Operator :: ", (50 < 100 && 100 > 50)); // true
    console.log("AND && Operator :: ", (50 > 100 && 100 > 50)); // false
    console.log("AND && Operator :: ", (50 < 100 && 100 < 50)); // false
    console.log("AND && Operator :: ", (50 > 100 && 100 < 50)); // false

}

// logicalAND();


function logicalOR() {

    console.log("OR || Operator :: ", (50 < 100 || 100 > 50)); // true
    console.log("OR || Operator :: ", (50 > 100 || 100 > 50)); // true
    console.log("OR || Operator :: ", (50 < 100 || 100 < 50)); // true
    console.log("OR || Operator :: ", (50 > 100 || 100 < 50)); // false

}

// logicalOR();

// console.log(!true); // false
// console.log(!false); // true


function comparisonOperators() {
    let a = 10;
    let b = 20;
    let c = '10';

    console.log('a == a', a == a); // true
    console.log('a == b', a == b); // false

    console.log('a != a', a != a); // false
    console.log('a != b', a != b); // true

    console.log('a < b', a < b); // true
    console.log('b < a', b < a); // false

    console.log('a > b', a > b); // flase
    console.log('b > a', b > a); // true

    console.log('a <= b', a <= b); // true
    console.log('a <= a', a <= a); // true
    console.log('b <= a', b <= a); // false

    console.log('b >= a', b >= a); // true
    console.log('b >= b', b >= b); // true
    console.log('a >= b', a >= b); // false

    console.log('a === a', a === a); // true
    // console.log('a === c', a === c); // false

    console.log('a !== b', a !== a); // false

}

// comparisonOperators();

function ternaryOperator(age: number) {

    let result = age >= 18 ? "Adult" : "Minor";
    console.log(result);


}
// ternaryOperator(20); //  Minor






