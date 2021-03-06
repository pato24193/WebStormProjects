function reverseArray(a) {
    let b = new Array(a.length);
    let j = 0;
    for (i = a.length - 1; i >= 0; i--) {
        b[j++] = a[i];
    }
    return b;
}

let a = [1, 2, 3, 4, 5];
a = reverseArray(a);
document.writeln(a);