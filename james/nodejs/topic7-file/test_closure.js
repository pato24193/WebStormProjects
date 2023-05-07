function outerFunction() {
    let outerVariable = "Hello";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

/* innerFunction la closure, boi vi no 1 sub function goi 1 variable tu parent function "outerFunction",
sau khi outerFunction da close.
-> Close tam thoi
 */
const closure = outerFunction();
closure();
