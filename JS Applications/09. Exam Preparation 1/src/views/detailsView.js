import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOne } from '../services/fruitService.js';


const detailsView = (fruit, userId) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${fruit.imageUrl} alt="example1" />
            <p id="details-title">${fruit.name}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p>
                        ${fruit.description}
                    </p>
                    <p id="nutrition">Nutrition</p>
                    <p id="details-nutrition">
                        ${fruit.nutrition}
                    </p>
                </div>
    ${fruit._ownerId === userId
        ?
        html`
            <div id="action-buttons">
                <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
                <a href="/delete/${fruit._id}" id="delete-btn">Delete</a>
            </div>
        `
        :
        null
    }
            </div>
        </div>
    </section>
`;

export const renderDetails = async (ctx) => {
    const fruitId = ctx.params.fruitId;
    const fruitData = await getOne(fruitId);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    ctx.mainRender(detailsView(fruitData, userId));
};