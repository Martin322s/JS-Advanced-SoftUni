function loginSession() {

    const url = "http://localhost:3030/users/login";
    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', (ev) => {
        ev.preventDefault();

        let formData = new FormData(ev.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        let data = { email, password };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(user => {
                console.log(user);
                localStorage.setItem('accessToken', user.accessToken);
                localStorage.setItem('email', user.email);
                localStorage.setItem('username', user.username);
                localStorage.setItem('_id', user._id);

                location.href = "/";
            });
    });
}
loginSession();