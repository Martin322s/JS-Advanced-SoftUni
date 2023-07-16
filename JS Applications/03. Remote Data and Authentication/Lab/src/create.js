const form = document.querySelector('form');
const user = JSON.parse(localStorage.getItem('user'));

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.currentTarget);
    let name = formData.get('name');
    let img = formData.get('img');
    let ingredients = formData.get('ingredients').split('\n');
    let steps = formData.get('steps').split('\n');
    let data = { name, img, ingredients, steps };

    if (!Object.values(data).some(x => x === "")) {
        fetch('http://localhost:3030/data/recipes', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                window.location.pathname = '/index.html';
            })
            .catch(err => alert(err));
    } else {
        alert('All fields are required!');
    }
});