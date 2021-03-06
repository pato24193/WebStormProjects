

function sum(a: number, b: number) : number {
    return a + b;
}

console.log(sum(2, 3));

let promise = new Promise((resolve, reject) => {
    console.log("hello promise");
});
