import { registerUser } from "./user-api-calls.js";
import { changeNav } from "../middlewares/renderMiddleware.js";

export function registerSubmit(ev, ctx) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const repass = formData.get('repass');

    const data = {
        email,
        username,
        password,
        repass
    };

    if (username.length >= 3 && password.length >= 3) {
        registerUser(data)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                ctx.page.redirect('/');
                changeNav();
            });
    }
}