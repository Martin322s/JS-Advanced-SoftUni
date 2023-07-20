import { html } from '../../node_modules/lit-html/lit-html.js';
import { registerUser } from '../services/authService.js';
import { changeNav } from '../middlewares/middleware.js';

const registerView = (ctx) => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${(ev) => submit(ev, ctx)}>
                <input 
                    type="text" 
                    name="email" 
                    id="register-email" 
                    placeholder="email" 
                />
                <input 
                    type="password" 
                    name="password" 
                    id="register-password" 
                    placeholder="password" 
                />
                <input 
                    type="password" 
                    name="re-password" 
                    id="repeat-password" 
                    placeholder="repeat password" 
                />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
        </div>
    </section>
`;

export const renderRegister = (ctx) => {
    ctx.mainRender(registerView(ctx));
};

function submit(ev, ctx) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const repassword = formData.get('re-password');


    if (email !== '' && password !== '') {
        if (password === repassword) {
            registerUser({ email, password })
                .then(user => {
                    localStorage.setItem('user', JSON.stringify(user));
                    ctx.page.redirect('/');
                    changeNav();
                });
        } else {
            alert('Passwords don\'t match!');
        }
    } else {
        alert('All fields are required!');
    }
}