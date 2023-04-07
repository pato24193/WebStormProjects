
function fibo(i: number): number {
    return i == 0 || i == 1 ? i : fibo(i - 2) + fibo(i - 1);
}

let n = 5;
let sum = 0;
let curFib = 0;

for (let i = 0; i < n; i++) {
    curFib = fibo(i);
    console.log(`Fibonacci ${i} : ${curFib}`);
    sum += curFib;
}

console.log(`Sum: ${sum}`);

// 1. Create project NodeJS
// 2. npm install typescript
// 3. npm install ts-node
// 4. Setting node package in Edit Config -> folder ts-node
// 5. Add "dom" in tsconfig.json to use "console.log".
// 6. Install plugin "Run config for TypeScript"
