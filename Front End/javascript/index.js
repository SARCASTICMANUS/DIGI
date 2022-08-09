console.log('Hello Javascript')

a = 10;
console.log(a)

l = 'nice';
g = 'great';
console.log(l, g);

// scope - this used to define the place where a variable will use


if (a % 2 == 0) {
    console.log('Even');
    z = 'this should be global';
    let x = 'thiss should be global';
    const y = 'this should be global';
    // y = 'this should be global';


} else {
    console.log('odd');
}

console.log(z);
// console.log(x);
console.log(y);