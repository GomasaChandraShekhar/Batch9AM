

// Object without type
const person = {
    name: 'Chandra',
    age: 35,
    city: 'Hyderabad',
    country: 'India'
}

// console.log('name : ', person.name);
// console.log('age : ', person.age);
// console.log('city : ', person.city);
// console.log('country : ', person.country);
// console.log(person["age"]);
// console.log(person['name']);

// console.log(person);
// console.table(person);

// for (const ele in person) {
//     console.log(ele, person[ele]);
// }

// for (const [key, value] of Object.entries(person)) {
//     console.log(`${key}: ${value}`);
// console.log(`Key is :: ${key}  Value is ::  ${value}`);
// }

// for (const key in person) {
//     const value = person[key];
//     console.log(value);
// }


// Object with Type

const employee: {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    job: 'Web Developer'
};

console.table(employee);



/*

export class Person {

    constructor(public aadhar: number, public firstName: string, public lastName: string) {
        this.aadhar = aadhar;
        this.firstName = firstName;
        this.lastName;
    }

    getFullName(): string {
        return `Full Name is :: ${this.firstName} ${this.lastName}`;
    }

    getDetails(): string {
        return `AAdhar: ${this.aadhar}, Name: ${this.getFullName()}`;
    }

}


let p1 = new Person(1234567890, 'Chandra', 'Shekhar');
// console.log(p1.getDetails());


let p2 = new Person(123456789087, "Rathna", "Kumar");

// console.log(p2.getDetails());

export function test01() {

    console.log("Hello");
}

// test01();

export function test02(name: string, age: number) {
    console.log(`${name}  ${age}`);
}

// test02('Chandra', 40);


export function getData(name: string, age: number): string {

    return name;

}

export function test03(age: number): number {
    console.log(age);

    return age;
    console.log(50); // unreachable

}

// anonymus function

export let test04 = function () {

    console.log("hello");

}

// test04();


export let sum = function (n1: number, n2: number) {
    console.log(n1 + n2);

}

// sum(10, 20);

export let add = function (n1: number, n2: number): number {
    console.log(n1 + n2);

    return n1 + n2;

}
// add(20, 30);


// Arrow function - Lambda function

let message = () => {
    console.log("I am arrow function");
    return "I am arrow function";
}

// console.log(message());


let status = () =>
    console.log("Thank you");
// status();


let msg = (name: string, pno: number): string => {
    console.log(`My Name is :: ${name} and my phone number is :: ${pno}`);
    return name;
}


// msg("Chandra", 9100774577);

*/