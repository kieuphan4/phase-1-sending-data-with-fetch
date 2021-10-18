const userObj = {
    name: 'Steve',
    email: 'steve@steve.com'
}

function submitData() {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(userObj),
    })
    .then(resp => resp.json())
    .then(object => document.body.innerHTML = object.id)
    .catch(error => {
        alert('Kowabummer, an error!');
        document.body.innerHTML = error.message
    })
}