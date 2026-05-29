

// String - immutable - cannot be changed
// index basis 

let sname1: string = 'Shekharh';
let sname2: string = "                  Chandra     ";

const multiLineString: string = `
This is a string
that spans multiple
lines.
`;


let sname1upper = sname1.toUpperCase();

console.log(sname1upper);

let sname1lower = sname1.toLowerCase();
console.log(sname1lower);

console.log('trim :: ', sname2.trim().length);
console.log('trimStart ::', sname2.trimStart().length);
console.log('trimEnd ::  ', sname2.trimEnd().length);

console.log(sname2.length);

console.log(sname1.charAt(0));
console.log(sname1.charAt(4));
console.log(sname1.charAt(5));

console.log(sname1.concat(sname2));
console.log(sname2 + sname1);

console.log(sname2.endsWith('w')); // false

console.log('IndexOf S :: ', sname1.indexOf('S'));
console.log('IndexOf k :: ', sname1.indexOf('k'));
console.log(sname1.includes('s'));

console.log(sname1.indexOf('h')); // 1
console.log(sname1.lastIndexOf('h'));

console.log(sname1.replace('h', 'l'));

console.log(sname1.replaceAll('h', 'l'));

console.log(sname1.substring(2));
console.log(sname1.substring(2, 6));



