import page from '../node_modules/page/page.mjs';
import { changeNav, renderTemplate } from './middlewares/middleware.js';
import { renderHome } from './views/homeView.js';
import { renderDashboard } from './views/dashboardView.js';
import { renderCreate } from './views/createView.js';
import { renderRegister } from './views/registerView.js';
import { renderLogin } from './views/loginView.js';
import { renderSearch } from './views/searchView.js';
import { logoutUser } from './services/authService.js';

page(renderTemplate);

page('/', renderHome);
page('/dashboard', renderDashboard);
page('/create', renderCreate);
page('/register', renderRegister);
page('/login', renderLogin);
page('/logout', logout);
page('/search', renderSearch);

page.start();

changeNav();

function logout(ctx) {
    const token = JSON.parse(localStorage.getItem('user'))?.accessToken;

    logoutUser(token, ctx)
        .then(() => {
            localStorage.clear();
            ctx.page.redirect('/');
            changeNav();
        });
}