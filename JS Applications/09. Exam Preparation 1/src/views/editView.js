import { html } from '../../node_modules/lit-html/lit-html.js';

const editView = () => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form">
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
                    placeholder="Fruit Image URL" 
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
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export const renderEdit = (ctx) => {
    ctx.mainRender(editView());
};