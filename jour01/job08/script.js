let isPrimeNumber = function(number) {
    if (number == 1) {
        return false;
    } else {
        // if the number is divisible by dividers up to number's square root no need to go further
        let sqrt = Math.floor(Math.sqrt(number));
        for (i = 2; i <= sqrt; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

let addPrimeNumbers = function(number1, number2) {
    if (isPrimeNumber(number1) && isPrimeNumber(number2)) {
        return number1 + number2;
    } else {
        return false;
    }
}


console.log(addPrimeNumbers(1, 7));
console.log(addPrimeNumbers(113, 3));


// let sqrt = Math.floor(Math.sqrt(121));
// for (i = 2; i <= sqrt; i++) {
//     console.log('sqrt : ' + sqrt);
//     console.log('divider : ' + i);
//     console.log('rest : ' + sqrt % i);
// }