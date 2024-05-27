const productNames = ['Strawberry', 'Potato', 'Cheese', 'Carrot', 'Tomato'];

// Sort the array in ascending order
const sortedProductNames = productNames.sort((a, b) => a.localeCompare(b));

console.log(sortedProductNames);


const productNames1 = ['Strawberry', 'Potato', 'Cheese', 'Carrot', 'Tomato'];

// Sort the array in descending order
const sortedProductNames1 = productNames.sort((a, b) => b.localeCompare(a));

console.log(sortedProductNames1);


const digits = [5, 2, 10, 8, 1];

// Sort the array in ascending order
const sortedDigits = digits.sort((a, b) => a - b);

console.log(sortedDigits);

const digits1 = [5, 2, 10, 8, 1];

// Sort the array in descending order
const sortedDigits1 = digits.sort((a, b) => b - a);

console.log(sortedDigits1);



//Callback


function add(a, b){
    return a+b;
}

function divide(a, b) {
    return a/b;
}


function calculate(x, y, operation) {
    return operation(x, y);
}


console.log(calculate(10, 5, add));

console.log(calculate(10, 5, divide));


//Another Callback


