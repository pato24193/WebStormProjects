console.log("Start");
var xHttp = new XMLHttpRequest();
xHttp.onload = function () {
    if (this.status == 200) {
        console.log(xHttp.responseText);
        console.log("End");
    }
};
xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
xHttp.send();
// console.log("End");
