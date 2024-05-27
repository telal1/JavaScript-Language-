// Array
let fruits = ['Apple', 'Banana', 'Orange'];

// For in loop (iterate over object keys)
console.log('\nFor...in loop:');
let person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
for (let key in person) {
    console.log(key + ':', person[key]);
}

// Using for of to iterate over array elements
console.log('\nUsing for...of loop:');
for (let fruit of fruits) {
    console.log(fruit);
}

//------------------------------------------------------------

// For loop
console.log('For loop:');
for (let i = 0; i < 5; i++) {
    console.log('Iteration', i);
}

// While loop
console.log('\nWhile loop:');
let j = 0;
while (j < 5) {
    console.log('Iteration', j);
    j++;
}

// Do-while loop
console.log('\nDo-while loop:');
let k = 0;
do {
    console.log('Iteration', k);
    k++;
} while (k < 5);