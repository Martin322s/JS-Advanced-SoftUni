import { html } from '../../node_modules/lit-html/lit-html.js';
import { createFruit } from '../services/fruitService.js';

const createView = (ctx) => html`
    <section id="create">
        <div class="form">
            <h2>Add Fruit</h2>
            <form class="create-form" @submit=${(ev) => submit(ev, ctx)}>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Fruit Name" 
                />
                <input 
                    type="text" 
                    name="imageUrl" 
                    id="Fruit-image" 
                    placeholder="Fruit Image" 
                />
                <textarea 
                    id="fruit-description" 
                    name="description" 
                    placeholder="Description" 
                    rows="10"
                    cols="50"
                >
                </textarea>
                <textarea 
                    id="fruit-nutrition" 
                    name="nutrition" 
                    placeholder="Nutrition" 
                    rows="10"
                    cols="50"
                >
                </textarea>
                <button type="submit">Add Fruit</button>
            </form>
        </div>
    </section>
`;

export const renderCreate = (ctx) => {
    ctx.mainRender(createView(ctx));
};

function submit(ev, ctx) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const name = formData.get('name');
    const imageUrl = formData.get('imageUrl');
    const description = formData.get('description');
    const nutrition = formData.get('nutrition');

    const data = {
        name,
        imageUrl,
        description,
        nutrition
    };

    const token = JSON.parse(localStorage.getItem('user')).accessToken;

    if (!Object.values(data).some(x => x === '')) {
        createFruit(data, token)
            .then(() => ctx.page.redirect('/dashboard'))
    } else {
        alert('All fields are required!');
    }
}