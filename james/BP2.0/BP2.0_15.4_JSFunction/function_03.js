function factorial(n) {
    let multi = 1;
    if (n === 0) {
        return 1;
    } else {
        let multi = 1;
        do {
            multi *= n;
            n--;
        } while (n > 0);
        return multi;
    }
}

document.writeln(factorial(5));