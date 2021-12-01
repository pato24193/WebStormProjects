console.log("Start");
let promiseObj = new Promise((resolve, reject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onload = function () {
        if (this.status == 300) {
            // console.log(xHttp.responseText);
            resolve(xHttp.responseText);
        }
        else {
            reject(xHttp.statusText);
        }
    };
    xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
    xHttp.send();
});
promiseObj.then((successData) => {
    console.log("OK");
    console.log(successData);
    console.log("End");
}, (failData) => {
    console.log("NG");
    console.log(failData);
}).catch((err) => {
    console.log("error");
});
