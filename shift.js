function shift(arr, direction, number) {
    if (direction == 'right') {
        const right = arr.slice(arr.length - number, arr.length)
        arr.splice(arr.length - number, arr.length)
        arr.unshift(...right);
        // console.log(arr)
        return arr;
    }
    else {
        const left = arr.slice(0, number)
        arr.splice(0, number)
        arr.push(...left)
        // console.log(arr)
        return arr;
    }
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}


// shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
// shift([1, 2, 3, 4, 5], 'right', 3)

const assert = require('assert');
assert(arrayEquals(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2),['sarah', 'alex', 'john', 'jane']) === true, "test1th");
assert(arrayEquals(shift([1,2,3,4,5], 'right', 3),[3,4,5,1,2]) === true,"test2th");