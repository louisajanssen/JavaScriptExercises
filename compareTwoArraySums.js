function compareTwoArraySums(array1, array2) {
    // find sum of boths arrays
    // compare sums

    var array1Sum = getSum(array1);
    var array2Sum = getSum(array2);

    if (array1Sum > array2Sum) {
        return 1;
    } else if (array2Sum > array1Sum) {
        return -1
    } else {
        return 0;
    }
}

function getSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}

var output = compareTwoArraySums([2, 3, 4], [3, 5, 3]);
console.log(output)
var output2 = compareTwoArraySums([1, 5] , [1, 2]);
console.log(output2)
var output3 = compareTwoArraySums([2, 2], [1, 3]);
console.log(output3)

// [2, 3, 4], [3, 5, 3] -> -1
// [1, 5] , [1, 2] -> 1
// [2, 2], [1, 3] -> 0