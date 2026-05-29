

// console.log(name1);

// var name1: string; // declaring without assining
// console.log(name1);

// var name1: string = 'Typescript'; // Re-declaring and assigning value
// console.log(name1);

// name1 = 'Javascript';
// console.log(name1);

// name1 = 100;


// console.log(sname); // hoisting not allowed - Reference error.

let sname;

sname = 'Chandra';

// let sname: string = 'Chandra'; // Re-declaration not allowed.
sname = 'Shekhar'; // Re-assinment allowed.

sname = 100; // Type Inference
sname = false; // Type Inference

// console.log(country);

const country: string = 'India';

// const country: string = 'USA';
// country = 'USA';
const collgeName = 'Next It Inst.';

let age: number = 35;
let flag: boolean = true;

/*
console.log(typeof (age)); // number
console.log(typeof (flag)); // boolean
console.log(typeof (collgeName)); // string
console.log(typeof (sname)); // string
*/

let abc = null;

// Union :: |

let xyz: (number | string | boolean);

xyz = "Chandra";
console.log('xyz type is :: ', typeof (xyz)); // string

xyz = 100;
console.log('xyz type is :: ', typeof (xyz)); //  number

xyz = true;
console.log('xyz type is :: ', typeof (xyz)); // boolean

let s1: string = 'String one';
console.log(typeof (s1));

let s2 = "String two";
console.log(typeof (s2));

let s3 = `String three`; // Template Literal
console.log(typeof (s3));

let s4 = `s1
s2
s3
s4
s5
s6`;
console.log(typeof (s4));

let s5 = "dfdsffds\
dsfdsfdsfdfs\
dffsadfdsffd\
dsfsfsf\
dsfdsf\
sddfdsf";
console.log(typeof (s5));

let s6 = 'sdfsafsdf\
dsfasdfadsf\
dsfadsf\
dsfadsf\
gdsgdgs';
console.log(typeof (s6));

let s7 = 'ashdh'; // = - Assignment Operator

// Union Type

// let varibname: number | string | boolean;


let data1: number | string;

data1 = 20;
console.log(typeof (data1));

data1 = 'Typescript'
console.log(typeof (data1));

// data = false;
// console.log(typeof (data)); // boolean


let x;

x = 23;
console.log(x);
console.log(typeof (x));

x = false;
console.log(x);
console.log(typeof (x));

export function test() {
    console.log();

}






