const nums = [3,2,5,6,3]

// create a new array that contains square of each element of the original array


const new_nums = [];
for (let e of nums ){
    // console.log(e*e);
    new_nums.push(e*e);
}

console.log(new_nums);


const res = nums.map ((n) =>{return n*n});

const res2 = nums.map(n=> n*n);
console.log(res2);

// wap a program 

const nums2 = [342, 23 ,4, 234, 23, 4, 23, 42]
const res3 = nums2.map((num)=> num%2==0);
console.log(res3);



// program 2
prices = [10,20,30,40,50];
output = ['₹10/-','₹20/-','₹30/-','₹40/-','₹50/-']


const new_prices = prices.map((price) => {return '$'+price+'/-'});
console.log(new_prices);


// FILTER
const filtered_nums = nums2.filter((n) => {return n%2!==0});
console.log(filtered_nums);


//wap to print all numbers divisible by 3 but not by 6
// between 1and 100

const rangearr = Array.from(Array(101).keys());
const evens = rangearr.filter((n) => {return n%3==0 && n%6!==0})
console.log(evens);