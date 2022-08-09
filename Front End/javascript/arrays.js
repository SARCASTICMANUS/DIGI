const f = ['apple', 'mango', 'grapes', 'orange', 'banana'];


// to get no of elements
console.log(f.length);
// Arryas properties
// 1.Mutable
// 2.Dynamic
// 3.Indexing

// indexing by postion no
console.log(f[0]);


// indexing by element name
console.log(f.indexOf('mango'));

// when no value is find
console.log(f[6]);


// slicing of elemnets by index no
console.log(f.slice(1, 3));
console.log(f.slice(1, 4));


// adding of element
f.push('berry');
console.log(f);

// adding element at specific place
newarr = f.slice(0, 2);
newarr.push('pumpkin');
console.log(newarr.concat(f.slice(2, f.lenght)));


// removing of element by name
f.pop('berry');
console.log(f);


// removing by no
f.splice(2, 2);
console.log(f);

f.splice(0, 2);
console.log(f);