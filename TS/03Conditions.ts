

function ifElseCond(age: number) {

    // if (age >= 18) {
    //     console.log("I am Adult.");
    // }
    // else {
    //     console.log("I am minor.");
    // }

    // even number == number/2 == reminder = 0;  / = Q, % = Re.

    // 10 % 2 == 0 ---- 5


    if (age % 2 == 0) {
        console.log("Given number is an even number.");
    }
    else {
        console.log("Given number is an odd number");
    }


}

// ifElseCond(19);

function elseIfCode(x: number | boolean | string) {

    if (typeof (x) == "number") {
        console.log("Number type.");
    }
    else if (typeof (x) == "boolean") {
        console.log("Boolean type");
    }
    else if (typeof (x) == "string") {
        console.log("String type.");
    }
    else {
        console.log("Type is undefined");
    }

}

// elseIfCode("100");

function switchCase(day: string) {

    switch (day) {

        case "Monday":
            console.log("Monday");
            break;
        case "Tuesday":
            console.log("Tuesday");
            break;
        case "Wednesday":
            console.log("Wednesday");
            break;
        case "Thursday":
            console.log("Thursday");
            break;
        case "Friday":
            console.log("Friday");
            break;
        case "Saturday":
            console.log("Saturday");
            break;
        case "Sunday":
            console.log("Sunday");
            break;

        default:
            console.log("Invalid day.");

    }

    console.log("Out of switch");

}

switchCase("Monday");












