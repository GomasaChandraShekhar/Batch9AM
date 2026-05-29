
import * as objects1 from './06objects';

import * as functions from './07functions';

let p3 = new objects1.Person(123412341234, 'CHandra', 'Shekhar');

let data = p3.getDetails();
console.log(data);

console.table(objects1.employee);

functions.getData("chandra", 35);
