import page from '../node_modules/page/page.mjs';
import { changeNav, renderTemplate } from './middlewares/middleware.js';
import { renderHome } from './views/homeView.js';
import { renderDashboard } from './views/dashboardView.js';
import { renderCreate } from './views/createView.js';
import { renderRegister } from './views/registerView.js';
import { renderLogin } from './views/loginView.js';
import { renderSearch } from './views/searchView.js';
import { renderDetails } from './views/detailsView.js';
import { renderEdit } from './views/editView.js';
import { logoutUser } from './services/authService.js';
import { deleteFruit } from './services/fruitService.js';

page(renderTemplate);

page('/', renderHome);
page('/dashboard', renderDashboard);
page('/create', renderCreate);
page('/register', renderRegister);
page('/login', renderLogin);
page('/logout', logout);
page('/search', renderSearch);
page('/details/:fruitId', renderDetails);
page('/edit/:fruitId', renderEdit);
page('/delete/:fruitId', del);

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

function del(ctx) {
    const token = JSON.parse(localStorage.getItem('user')).accessToken;
    const confirmation = confirm('Are you sure you want to delete?');

    if (confirmation) {
        deleteFruit(token, ctx.params.fruitId)
            .then(() => ctx.page.redirect('/dashboard'));
    }
}