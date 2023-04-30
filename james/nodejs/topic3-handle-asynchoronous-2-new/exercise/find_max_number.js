
async function findMaxNumber(arr) {
    return await new Promise(resolve => {
        if (Array.isArray(arr)) {
            resolve(Math.max(...arr));
        } else {
            throw "Param is not an array!";
        }
    });
}

let a = [5, 2, 9, 12, 3];

findMaxNumber(a).then(value => {
    console.log('OK');
    console.log(value);
}).catch(reason => {
    console.log('Error');
    console.log(reason);
})

