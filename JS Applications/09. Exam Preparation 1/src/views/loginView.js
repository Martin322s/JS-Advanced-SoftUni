import { html } from '../../node_modules/lit-html/lit-html.js';
import { changeNav } from '../middlewares/middleware.js';
import { loginUser } from '../services/authService.js';

const loginView = (ctx) => html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${(ev) => submit(ev, ctx)}>
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="#">Create an account</a>
                </p>
            </form>
        </div>
    </section>
`;

export const renderLogin = (ctx) => {
    ctx.mainRender(loginView(ctx));
};

function submit(ev, ctx) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');


    if (email !== '' && password !== '') {
        loginUser({ email, password })
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                ctx.page.redirect('/');
                changeNav();
            });
    }
}