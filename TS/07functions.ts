
export class TestClass {



}


export let sname: string = "Typescript";

let num1: number = 100;

const country: string = "India";


export function test01() {

    console.log("Hello");
}

test01();

function test02(name: string, age: number) {
    console.log(`${name}  ${age}`);
}

test02('Chandra', 40);


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

test04();


export let sum = function (n1: number, n2: number) {
    console.log(n1 + n2);

}

sum(10, 20);

let add = function (n1: number, n2: number): number {
    console.log(n1 + n2);

    return n1 + n2;

}
add(20, 30);


// Arrow function - Lambda function

let message = () => {
    console.log("I am arrow function");
    return "I am arrow function";
}

console.log(message());


export let status = () =>
    console.log("Thank you");


status();


export let msg = (name: string, pno: number): string => {
    console.log(`My Name is :: ${name} and my phone number is :: ${pno}`);
    return name;
}


msg("Chandra", 9100774577);