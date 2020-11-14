function findSumEven(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i]
        }
    }
    return sum;
}


var input = [1, 20, 8, 9, 19, 2]
var output = findSumEven(input);
console.log(output);