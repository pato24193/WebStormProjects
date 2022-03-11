function isPrimeNumber(numberUser) {
    let count = 0;

    for (let i = 1; i <= numberUser; i++) {
        if (numberUser % i == 0) {
            count++;
        }
    }

    if (count === 2) {
        return true;
    } else {
        return false;
    }
}