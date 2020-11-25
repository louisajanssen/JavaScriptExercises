function filterByAgeGreaterThan30 (array) {
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i].age > 30) {
            newArr.push(array[i])
        }
    }
    return newArr;
}

var input = [{
    name: 'Jorge',
    phone:'-',
    age: 40
}, {
    name: 'Louisa',
    phone: '-',
    age: 24
}]

var output = filterByAgeGreaterThan30 (input);
console.log(output)