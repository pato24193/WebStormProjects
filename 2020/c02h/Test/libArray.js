function findElementInArray(array, element) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i;
        }
    }

    return -1;
}
