function invertArr(array) {
    var newArr = [];
    for (var i = array.length -1; i > - 1; i--) {
        newArr.push(array[i])
    }
    return newArr;
}


var input = [1, 2, 3, 4, 5, 6, 7];
var output = invertArr(input);
console.log(output);