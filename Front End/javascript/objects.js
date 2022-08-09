student = {
    name: 'Deepak',
    roll_no: '43',
    year: '3',
};

console.log(student);
console.log(student.name);
console.log(student.roll_no);

student.sem = 3

console.log(student);



// object of a mobile
mobile = {
    ram: '8 gb',
    rom: '128 gb',
    camera: '48 mpx',
    battery: '5000 mah',
    screen_size: '10 inch',
    charging_port: 'type c',
    brand: 'redmi',
    model: 'zx 3 prime',

};

console.log(mobile);

// object creation with existing variable
const ram = '8gb';
const storage = '128 gb';
const brand = 'samsung';
const model = 'j9';

const smartphone = {
    ram,
    storage,
    brand,
    model
};

console.log(smartphone);


// chaging data of a specific field
smartphone.brand = 'moto';

console.log(smartphone);


console.log(Object.keys(smartphone));
console.log(Object.values(smartphone));



// find the velue
let user = {
    name: 'jhon',
    age: 30,
    isMarried: false,
    hobbies: ['sports', 'cooking',
        {
            type: 'reading',
        }
    ],
};

console.log(user.hobbies[1]);
console.log(user.hobbies[2].type);


// finding no divisble by 6
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 6 != 0) {
        console.log(i);
    }
}