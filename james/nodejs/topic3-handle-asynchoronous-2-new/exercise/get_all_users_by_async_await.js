axios = require('axios');

async function getAllUsers() {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
}

getAllUsers().then(value => {
    console.log(value.data);
})


