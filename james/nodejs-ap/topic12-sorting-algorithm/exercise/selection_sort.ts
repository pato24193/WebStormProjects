function selectionSort(list: number[]): void {
    for (let i = 0; i < list.length - 1; i++) {
        /* Find the minimum in the list[i..list.length-1] */
        let currentMin: number = list[i];
        let currentMinIndex: number = i;

        for (let j = i + 1; j < list.length; j++) {
            if (currentMin > list[j]) {
                currentMin = list[j];
                currentMinIndex = j;
            }
        }

        /* Swap list[i] with list[currentMinIndex] if necessary */
        if (currentMinIndex != i) {
            list[currentMinIndex] = list[i];
            list[i] = currentMin;
        }
    }
}

// This is our unsorted array
let arr = [234, 43, 55, 63, 5, 6, 235, 547];

selectionSort(arr);

console.log(arr);
