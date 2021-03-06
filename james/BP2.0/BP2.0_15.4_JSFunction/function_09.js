function containsElement(array, element) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (element == array[i]) {
            count++;
        }
    }

    return count == 0 ? -1 : count;
}

let a = [1, 2, 3, 4, 5, 4, 12, 9, 3];
let e = 3;

alert(containsElement(a, e));