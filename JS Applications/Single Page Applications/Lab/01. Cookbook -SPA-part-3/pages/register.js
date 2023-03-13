import { updateAuth } from "../src/auth.js";
import { router } from "../src/router.js";

const registerSection = document.querySelector('.register');
const registerForm = registerSection.querySelector('form');

export function renderRegister() {
    registerSection.style.display = 'block';
}

registerForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    let data = { email, password, rePass };

    try {
        fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(newUser => {
                localStorage.setItem('user', JSON.stringify(newUser));
                updateAuth();
                router("/");
            });
    } catch (error) {
        alert(error.message);
    }
});