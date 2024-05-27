// Example 1: Variable Hoisting
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5


hello(); // Output: "Hello, world!"
function hello() {
  console.log("Hello, world!");
}

//Closure
function outerFunction() {
    var outerVariable = 'I am outer';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var myClosure = outerFunction()
  myClosure(); // Outputs: I am outer


  const key = Symbol('description');
  console.log(key);