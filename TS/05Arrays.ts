
const arr1 = ['chandra', 35, 'India', 9912127022, true]

const arr2: string[] = ['Charmi', 'Rathna', 'chandra', 'Harsha'];
const arr3: number[] = [10, 20, 30, 40, 50];

const arr4: (string | number)[] = ['Charmi', 10, 'Rathna', 20, 'chandra', 30, 'Harsha', 40];

// console.log(arr1[0]); // 
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);

// console.log(arr1[5]); // undefined

// console.log('Number of elements :: ', arr4.length)
// console.table(arr4);

// console.log(arr1[arr1.length - 1]);


// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// for of -- directly access the elements of the array
// for (const e of arr4) {
//     console.log(e);
// }


// for in loop -- access the elements of the array on index basis
// for (let i in arr4) {
//     console.log(arr4[i]);
// }


const enames: Array<string> = ["john", "smith", "peter", "scott"]; // Array of strings

const eids: Array<number> = [101, 102, 103, 104]; // Array of numbers

const data: Array<string | number> = ["john", 122, "smith", 101, 102]; // Union type (string or number)

const data2: Array<any> = [1, "john", true, null]; // Array allowing multiple data types

// console.log(data.length)

let ele: string | number | undefined;

// ele = data.pop(); // delete last element of the array
// console.log(ele); // 102

// console.log(data.push('Shekhar', 105)); // add elements at the end the array

// ele = data.shift(); // delete elements at the begining of the array

// console.log(ele); // undefined
// console.table(data);
// data.unshift('rathna', 104); // add elements at the begining of the array
// console.table(data);
// const subArr = data.slice(0, 2); // to get part of the array
// console.table(subArr);

// console.table(data.splice(0, 2)); // remove elements from the array.

// console.table(data.splice(0, 1, 'Shekhar')); // remove and add data
// console.table(data);

const even: number[] = [2, 4, 6, 8, 10, 11, 13, 15];
const odd: number[] = [17, 19];
// let allEven = even.every(n => n % 2 == 0); // true
// console.log(allEven);

// console.table(even.filter(n => n % 2 == 0));

// console.table(even.map(n => n * 3));

// even.forEach((ele) => {
//     console.log(ele % 2 == 0);
// });

// console.log(even.some(n => n % 2 == 0));

// console.log(even.reduce((sum, n) => sum + n, 0)); // 69
// const arr12 = even.toString();
// console.log(typeof (arr12[0]));

// console.log(even.includes(20));

// console.log(even.indexOf(150));// -1

console.table(even.concat(odd));




