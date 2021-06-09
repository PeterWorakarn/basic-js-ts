function secondMax(arr) {
    if (arr.length === 0) {
        return new Error('Error!');
    }
    const transform = Array.from(new Set(arr));
    if (transform.length == 1) {
        return transform[0];
    }
    return transform.sort(function(a, b){return a - b})[transform.length - 2];
}


// secondMax([2,3,4,5])
// secondMax([9,2,21,21])
// secondMax([4,4,4,4])
// secondMax([4123]) 

const assert = require('assert');
assert(secondMax([2,3,4,5]) === 4,"test1th");
assert(secondMax([9,2,21,21]) === 9,"test2th");
assert(secondMax([4,4,4,4]) === 4,"test3th");
assert(secondMax([4123]) === 4123,"test4th");
assert(secondMax([]) instanceof Error,"test5th");