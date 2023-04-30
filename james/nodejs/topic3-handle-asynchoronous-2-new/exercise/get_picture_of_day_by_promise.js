axios = require('axios');

function getPictureOfDay() {
    return new Promise(resolve => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=PHEoPU27HC8lVUEFlH8Gi0ZK9SsY6iqIjsipGfer").then(value => {
            resolve(value);
        })
    });
}

getPictureOfDay().then(value => {
    console.log(value.data);
}, reason => {
    console.log('Error');
})
