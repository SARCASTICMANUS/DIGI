// fuction making method 1

function addnums(a, b) {
    console.log(a + b);
    return a + b;
}

addnums(23456, 234)


// function making method 2
const fact = function(n) {
    f = 1;
    for (let i = 2; i <= n; i++) {
        f = f * i;
    }

    console.log(f);
}

fact(6);
fact(10);
fact(24);


// function making method 3
// wap to print all the numbers divisible by 7 betweeen 1 and 100

const checkby7 = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 7 == 0) {
            console.log(i);
        }
    }
}

checkby7(10, 30);
checkby7(50, 80);
checkby7(90, 100);

const res = addnums(54, 636);
console.log(res);

const sumprod = (x, y) => {
    return [x + y, x * y]
}


let [sum, product] = sumprod(345, 34212);

console.log(sum, product);


const diplayDetails = (user) => {
    console.log(user.name);
    console.log(`User name is ${user.name} and hobby is ${user.hobby}`);
};

const diplayDetailsv2 = ({ name, hobby }) => {
    console.log(user.name);
    console.log(`User name is ${name} and hobby is ${hobby}`);
};

const user = {
    name: 'Deepak',
    hobby: 'Coding',
};