let nPrime = parseInt(prompt("Please input number of prime numbers: "));
let countPrime = 0;
let number = 2;
let count = 0;

while (countPrime < nPrime) {
    count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    if (count == 2) {
        document.writeln(number)
        countPrime++;
    }

    number++;
}