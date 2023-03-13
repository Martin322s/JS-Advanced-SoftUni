import { updateAuth } from "../src/auth.js";
import { router } from "../src/router.js";

const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form');

export function renderLogin() {
    loginSection.style.display = 'block';
}

loginForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');

    let data = { email, password };

    try {
        fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                updateAuth();
                router('/')
            });
    } catch (error) {
        alert(error.message);
    }

    loginForm.querySelector('input[type=text]').value = "";
    loginForm.querySelector('input[type=password]').value = "";
});

export function renderLogut() {
    localStorage.removeItem('user');
    updateAuth();
    router("/");
}

export function getToken() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    return user['accessToken'];
}