let isPrimeNumber = function(number) {
    // if the square root is divisible no need to go further
    let sqrt = Math.floor(Math.sqrt(number));
    for (i = 2; i <= sqrt; i++) {
        if (sqrt % i == 0) {
            return false;
        }
    }
    return true;
}

let addPrimeNumbers = function(number1, number2) {
    if (isPrimeNumber(number1) && isPrimeNumber(number2)) {
        return number1 + number2;
    } else {
        return false;
    }
}

// console.log(Math.sqrt(121));
console.log(isPrimeNumber(121));
console.log(addPrimeNumbers(3, 7));

// let sqrt = Math.floor(Math.sqrt(121));
// for (i = 2; i <= sqrt; i++) {
//     console.log('sqrt : ' + sqrt);
//     console.log('divider : ' + i);
//     console.log('rest : ' + sqrt % i);
// }