function makeInputVerifier(minimum, maximum) {
    return function verify(inputValue) {
      if (inputValue < minimum) {
        return 'Input is less than minimum value';
      } else if (inputValue >= minimum && inputValue <= maximum) {
        return 'Input is in range';
      } else {
        return 'Input is more than maximum value';
      }
    };
  }

  const verifier = makeInputVerifier(10, 20);
console.log(verifier(25)); //Comments 