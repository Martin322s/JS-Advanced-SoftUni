import { renderHome } from "../pages/home.js";
import { renderLogin, renderLogut } from "../pages/login.js";
import { renderRegister } from "../pages/register.js";
import { renderCreate } from "../pages/create.js";
import { renderError } from "../pages/error-page.js";

const sections = document.querySelector('.main');

const routes = {
    "/": renderHome,
    "/login": renderLogin,
    "/logout": renderLogut,
    "/register": renderRegister,
    "/create": renderCreate
};

export function router(path) {
    hideAllSections();

    const renderer = routes[path] || renderError();
    renderer();
}

function hideAllSections() {
    for (const section of sections.children) {
        section.style.display = "none";
    }
}