console.log("First");

let promise = new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (this.status == 200) {
            resolve(xhttp.responseText);
        } else {
            reject('error');
        }
    };
    xhttp.open("GET", 'https://api.github.com/search/repositories?q=angular', true);
    xhttp.send();
});

promise.then(value => {
    console.log("OK");
    console.log(value);
}, reason => {
    console.log("NG");
    console.log(reason);
}).then(value => {
    console.log("End");
});

