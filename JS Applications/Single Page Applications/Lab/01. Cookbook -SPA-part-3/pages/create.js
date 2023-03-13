import { getToken } from "./login.js";
import { router } from "../src/router.js";

const createSection = document.querySelector('.create');
const createForm = createSection.querySelector('form');

export function renderCreate() {
    createSection.style.display = 'block';
}

createForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.currentTarget);
    let name = formData.get('name');
    let img = formData.get('img');
    let ingredients = formData.get('ingredients').split('\n');
    let steps = formData.get('steps').split('\n');

    let data = {
        name,
        img,
        ingredients,
        steps
    };

    try {
        fetch('http://localhost:3030/data/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                router('/');
            });
    } catch (error) {
        alert(error.message);
    }
});