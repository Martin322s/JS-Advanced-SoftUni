import { render } from '../../node_modules/lit-html/lit-html.js';

const mainElement = document.getElementById('root');

function renderContent(template) {
    render(template, mainElement);
}

export const renderTemplate = (ctx, next) => {
    ctx.mainRender = renderContent;
    next();
}

export const isAuth = () => {
    const serializedUser = JSON.parse(localStorage.getItem('user'));

    if (serializedUser) {
        return true;
    } else {
        return false;
    }
}

export function changeNav() {
    const userView = document.querySelectorAll("#user");
    const guestView = document.querySelectorAll("#guest");

    if (isAuth()) {
        userView.forEach(x => x.style.display = "inline");
        guestView.forEach(x => x.style.display = "none");
    } else {
        userView.forEach(x => x.style.display = "none");
        guestView.forEach(x => x.style.display = "inline");
    }
}

export const getToken = () => JSON.parse(localStorage.getItem('user'))?.accessToken;