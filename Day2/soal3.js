// PRIME NUMBER

let primeNumber = 7;
let isPrime = true;

if (primeNumber === 1) {
    isPrime = false;
} else if (primeNumber > 1) {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    } 
}

if (isPrime) {
    console.log(primeNumber + " adalah bilangan prima.");
} else {
    console.log(primeNumber + "bukan bilangan prima.");
}
