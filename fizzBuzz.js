function fizzBuzz(n) {
    return (n%3 === 0) && (n%5 ===0) ? 'FizzBuzz'
    : (n%3 === 0) ? 'Fizz'
    : 'Buzz';
    
}

const assert = require('assert');
assert(fizzBuzz(21) === 'Fizz',"test1th");
assert(fizzBuzz(25) === 'Buzz',"test2th");
assert(fizzBuzz(45) === 'FizzBuzz',"test3th");