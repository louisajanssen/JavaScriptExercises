function fizzBuzz() {
    for (var i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Fizz Buzz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
    return;
}

console.log(fizzBuzz())