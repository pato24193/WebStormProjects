// console.log("First");
//
// let xHttp = new XMLHttpRequest();
// xHttp.onload = function() {
//     if (this.status == 200) {
//         console.log(xHttp.responseText);
//     }
// };
// xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
// xHttp.send();
// console.log("End");

let promiseObj = new Promise((resolve, reject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onload = function() {
        if (this.status == 200) {
            resolve(xHttp.responseText);
        } else {
            reject(new Error(xHttp.statusText));
        }
    };
    xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
    xHttp.send();
});

promiseObj.then(value => {
    console.log("Keep promise");
    console.log(value);
}, reason => {
    console.log("Don't keep promise");
    console.log(reason);
}).then(value => {
    console.log("End");
});

