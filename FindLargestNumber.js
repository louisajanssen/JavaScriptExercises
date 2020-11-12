function findLargest(array){
    var largest = 0;

    if (array.length === 0) {
        return - 1;
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        } 
    }
    return largest;
}


var input = [];
var input = [1, 25, 8, 9, 19]
var output = findLargest(input);
console.log(output);