console.log("Start");

let promiseObj = new Promise((resolve, reject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onload = function () {
        if (this.status == 200) {
            resolve(xHttp.responseText);
        } else {
            reject('Co loi xay ra roi')
        }
    };
    xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
    xHttp.send();
})

promiseObj.then((resultFromAPI) => {
    console.log(resultFromAPI);
    console.log("End");
}, (error) => {
    console.log(error);
})

