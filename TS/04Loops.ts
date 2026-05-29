import * as uniontypes from "./UnionType";


// print num 0 to 5   code reusability

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


// 0 to 100


function forLoop() {

    // 1 - 5

    for (let x = 1; x <= 5; x++) {
        console.log(x);
    }

}

// forLoop();

function forBreak() {

    for (let i = 0; i <= 5; i++) {
        // break loop if i=3;
        if (i == 3) {
            break; // terminating the loop
        }
        console.log(i);
    }
    console.log('Out of for loop');
}

// forBreak();

function forContinue() {

    for (let i = 0; i <= 5; i++) {
        // break loop if i=3;
        if (i == 3) {
            continue; // skip the current execution and continue executing next iteration
        }
        console.log(i);
    }
    console.log('Out of for loop');

}
// forContinue();

function whilestmt() {
    let i = 0;
    while (i > 5) {
        console.log(i);
        i++;
    }
    console.log('Out of while loop');

}

// whilestmt();

function dowhilestmt() {
    let i = 0;

    do {
        console.log(i);
        i++;
    }
    while (i > 5);
    console.log('Out of do-while loop');

}
dowhilestmt();