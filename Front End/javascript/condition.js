//checking number division 

let c = '50';

if (c % 7 == 0) {
    console.log('divisible by 7');
} else {
    console.log('not divisible by 7');

}

//checking 2 number divisble by one 1
let a = '8';
// let b = '22';

if (a % 7 == 0 && a % 11 == 0) {
    console.log('number is divisible by both 7and 11');

} else if (a % 7 == 0) {
    console.log('number is divisible by 7 only');
} else if (a % 11 == 0) {
    console.log('number is divisible 11 only');

} else {
    console.log('Number in not divisible by both 7 and 11');
}

//wap to check a perfect square
//** exponent operater */

num = 25;

m = num ** 0.5;
if (m == parseInt(m)) {
    console.log('perfect square');
} else {
    console.log('not a perfect square');
}