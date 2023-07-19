const baseUrl = 'http://localhost:3030/users';

export async function registerUser(userData) {
    const res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    return await res.json();
}

export function logoutUser(ctx) {
    const token = JSON.parse(localStorage.getItem('user'))?.accessToken;

    fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    })
        .then(() => {
            localStorage.clear();
            ctx.page.redirect('/');
        });
}