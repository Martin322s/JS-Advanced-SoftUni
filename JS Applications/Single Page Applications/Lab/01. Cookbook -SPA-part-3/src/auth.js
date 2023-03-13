const userNavigation = document.querySelector('#user');
const guestNavigation = document.querySelector('#guest');

export function updateAuth() {
    const serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        userNavigation.style.display = 'inline';
        guestNavigation.style.display = 'none';
    } else {
        userNavigation.style.display = 'none';
        guestNavigation.style.display = 'inline';
    }
}
