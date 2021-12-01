//code 1
fetch('https://api.github.com/search/users?q=thienphamIT1907')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
//code 2
fetch('https://api.github.com/search/users?q=thienphamIT1907')
    .then(res => {
        res.json();
    })
    .then(data => {
        console.log(data)
    })
