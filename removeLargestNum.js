function removeLargestNum(array){
    var largest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    console.log('Largest number is', largest)
    var indexOfLargest = arr.indexOf(largest)
    console.log('Index of largest:', indexOfLargest)
    array.splice(indexOfLargest, 1);
    return array;
}


var input = [1, 2, 100, 4, 5]
var output = removeLargestNum(input);
console.log(output);