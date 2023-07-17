import { logoutUser } from "./services/services.js";

export function logout() {
    let token = JSON.parse(localStorage.getItem('user')).accessToken;
    localStorage.clear();

    logoutUser(token)
        .then(() => location.href = '/');
};