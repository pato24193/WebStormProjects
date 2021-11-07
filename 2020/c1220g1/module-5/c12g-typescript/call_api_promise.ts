console.log("Start");

let promiseObj = new Promise((resolve, reject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onload = function() {
        if (this.status == 200) {
            // console.log(xHttp.responseText);
            resolve(xHttp.responseText);
        } else {
            reject('Error call API');
        }
    };
    xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
    xHttp.send();
});

promiseObj.then((resultFromAPI) => {
    console.log('OK')
    console.log(resultFromAPI);
    console.log('End');
}, (error) => {
    console.log('NG');
    console.log(error);
});