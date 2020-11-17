function removeSecondLargestNum(array) {
    var largest = array[0];
    var secondLargest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    for (var j = 0; j < array.length; j++) {
        if (array[j] > secondLargest && array [j] !== largest) {
            secondLargest = array[j];
            
        }
    }
    console.log('Largest num: ', largest)
    console.log('Second Largest Num: ', secondLargest)
    var index = array.indexOf(secondLargest);
    console.log('index of secondLargest:', index)
    array.splice(index, 1);
    return array;
}

var input = [1, 2, 100, 4, 5]
var output = removeSecondLargestNum(input);
console.log(output);