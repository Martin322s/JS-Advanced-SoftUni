import { html } from '../../node_modules/lit-html/lit-html.js';
import { editFruit, getOne } from '../services/fruitService.js';

const editView = (fruit, ctx, fruitId) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form" @submit=${(ev) => submit(ev, ctx, fruitId)}>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Fruit Name"
                    value=${fruit.name}
                />
                <input 
                    type="text" 
                    name="imageUrl" 
                    id="Fruit-image" 
                    placeholder="Fruit Image URL"
                    value=${fruit.imageUrl} 
                />
                <textarea 
                    id="fruit-description" 
                    name="description" 
                    placeholder="Description" 
                    rows="10"
                    cols="50" 
                >
                ${fruit.description}
                </textarea>
                <textarea 
                    id="fruit-nutrition" 
                    name="nutrition" 
                    placeholder="Nutrition" 
                    rows="10"
                    cols="50"
                >
                ${fruit.nutrition}
                </textarea>
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export const renderEdit = async (ctx) => {
    const fruitId = ctx.params.fruitId;
    const data = await getOne(fruitId);
    ctx.mainRender(editView(data, ctx, fruitId));
};

function submit(ev, ctx, fruitId) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const name = formData.get('name');
    const imageUrl = formData.get('imageUrl');
    const description = formData.get('description');
    const nutrition = formData.get('nutrition');

    const token = JSON.parse(localStorage.getItem('user')).accessToken;

    const data = {
        name,
        imageUrl,
        description,
        nutrition
    };

    if (!Object.values(data).some(x => x === '')) {
        editFruit(data, token, fruitId)
            .then((newFruit) => console.log(newFruit));
    } else {
        alert('All fields are required!');
    }
}