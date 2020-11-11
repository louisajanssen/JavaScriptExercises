function swapNums(array) {
    for (var i = 0; i < array.length - 2; i += 3) {
        var hold = array[i];
        console.log(hold);
        array[i] = array[i + 2];
        console.log(array[i])
        array[i + 2] = hold;
        console.log(array[i + 2])
    }
    return array;
    // var hold = array[0];
    // array[0] = array[0 + 2];
    // array[0 + 2] = hold;

    // return array;
}

var input = [1, 2, 3, 4, 5];
var output = swapNums(input);
console.log(output);