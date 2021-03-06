function swap(a, b) {
    let tmp = a;
    a = b;
    b = tmp;

    document.writeln("a = " + a + " , b = " + b);
}

swap(1, 2);