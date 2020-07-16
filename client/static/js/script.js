fetch('http://localhost:3000/api/users')
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log(users);
    })

