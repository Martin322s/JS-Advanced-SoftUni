import page from "../node_modules/page/page.mjs";
import { changeNav, renderTemplate } from './middlewares/middleware.js';
import { renderCatalog } from "./views/catalogPage.js";
import { renderCreate } from "./views/createPage.js";
import { renderDetails } from "./views/detailsPage.js";
import { renderEdit } from "./views/editPage.js";
import { renderHome } from './views/homePage.js';
import { renderLogin } from "./views/loginPage.js";
import { renderOwned } from "./views/myFurnitures.js";
import { renderRegister } from "./views/registerPage.js";

page(renderTemplate);
page('/', renderHome);
page('/catalog', renderCatalog);
page('/create', renderCreate);
page('/register', renderRegister);
page('/owned', renderOwned);
page('/login', renderLogin);
page('/logout', logout);
page('/details/:offerId', renderDetails);
page('/edit/:offerId', renderEdit);
page('/delete/:offerId', deleteOffer);

page.start();

changeNav();


function logout() {
    fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken
        }
    })
        .then(() => {
            localStorage.clear();
            page.redirect('/');
            changeNav();
        });
}

function deleteOffer(ctx) {
    const confirmation = confirm('Are you sure you want to delete this offer?');
    const token = JSON.parse(localStorage.getItem('user')).accessToken;
    const offerId = ctx.params.offerId;

    if (confirmation) {
        fetch(`http://localhost:3030/data/catalog/${offerId}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': token
            }
        })
            .then(() => page.redirect('/'));
    }
}