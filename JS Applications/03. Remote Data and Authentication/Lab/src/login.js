const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');
    let data = { email, password };

    if (!Object.values(data).some(x => x === "")) {
        fetch('http://localhost:3030/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(user => {
                if (user.code) {
                    throw new Error(user.message);
                } else {
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.pathname = '/index.html';
                }
            })
            .catch(err => alert(err));
    } else {
        alert('All fields are required!');
    }
});