// fibo nth = (n-1)+(n-2)
function fib(n) {
    if (n == 1 || n == 2) {
        return 1
    }
    return (fib(n - 2) + fib(n - 1))
}

const assert = require('assert');

assert(fib(1) === 1,"test1th");
assert(fib(2) === 1,"test2th");
assert(fib(3) === 2,"test3th");
assert(fib(4) === 3,"test4th");
assert(fib(12) === 144,"test12th");