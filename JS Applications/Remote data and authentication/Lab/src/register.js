function registerUser() {

    const url = "http://localhost:3030/users/register";
    const registerForm = document.querySelector('form');

    registerForm.addEventListener('submit', (ev) => {
        ev.preventDefault();

        let formData = new FormData(ev.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('rePass');

        let data = { email, password, rePassword };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(newUser => {
                localStorage.setItem('accessToken', newUser.accessToken);
                localStorage.setItem('username', newUser.email);
                location.href = "/";
            });
    });
}
registerUser();