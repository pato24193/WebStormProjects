function getMin(a, b, c) {
    return (a < b && a < c) ? a : ((b < a && b < c) ? b : c);
}

document.writeln(getMin(4, 54, 24));