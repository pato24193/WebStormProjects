console.log("Start");
let promiseObj = new Promise((resolve, reject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onload = function () {
        if (this.status == 200) {
            // console.log(xHttp.responseText);
            resolve("Cac du lieu khi get thanh cong");
        }
        else {
            reject("Connect API failed!");
        }
    };
    xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
    xHttp.send();
});
promiseObj.then(value => {
    console.log(value);
    console.log("End");
}, reason => {
    console.log(reason);
    console.log("Check error program!");
});
