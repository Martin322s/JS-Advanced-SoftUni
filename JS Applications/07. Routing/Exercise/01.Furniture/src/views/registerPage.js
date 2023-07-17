import { html } from "../../node_modules/lit-html/lit-html.js";
import { registerUser } from "../api-calls.js";
import page from '../../node_modules/page/page.mjs';
import { changeNav } from "../middlewares/middleware.js";

const registerPage = () => html`
<div class="container">
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${(ev) => submit(ev)}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>
</div>
`;

export const renderRegister = (ctx) => {
    ctx.mainRender(registerPage());
}

function submit(ev) {
    ev.preventDefault();
    
    const formData = new FormData(ev.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');
    const data = { email, password, rePass };

    if (!Object.values(data).some(x => x === '')) {
        registerUser(data)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                page.redirect('/');
                changeNav();
            });
    }
}