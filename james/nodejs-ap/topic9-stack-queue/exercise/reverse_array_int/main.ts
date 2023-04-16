import {Stack} from "../Stack";

let arrInt = [3, 5, 2, 12, 100, 77];

let stack = new Stack<number>();

for (let n of arrInt) {
    stack.push(n);
}

let i = 0;
while (!stack.isEmpty()) {
    arrInt[i++] = stack.pop();
}

console.log(arrInt);
