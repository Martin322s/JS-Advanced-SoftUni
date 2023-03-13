import { updateAuth } from "./auth.js";
import { router } from "./router.js";

router('/');
updateAuth();

const mainNavigation = document.querySelector('.navigation');

mainNavigation.addEventListener('click', (ev) => {
    ev.preventDefault();

    if (ev.target.tagName === 'A') {
        let url = new URL(ev.target.href);
        router(url.pathname);
    }
});



