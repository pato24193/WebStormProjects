console.log("Start");

async function readGithub() {
    let promiseObj = new Promise((resolve, reject) => {
        let xHttp = new XMLHttpRequest();
        xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
        xHttp.onload = function() {
            if (this.status == 200) {
                return resolve(xHttp.responseText);
            }
        };
        xHttp.send();
    })
    console.log(await promiseObj);
    console.log("End");
}

readGithub();

