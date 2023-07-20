import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../services/fruitService.js';

const fruitTemplate = (fruit, accessToken) => html`
    <div class="fruit">
        <img src=${fruit.imageUrl} alt="example1" />
        <h3 class="title">${fruit.name}</h3>
        <p class="description">
            ${fruit.nutrition}
        </p>
        ${accessToken
            ?
            html`<a class="details-btn" href="/details/${fruit._id}">More Info</a>`
            :
            nothing
        }
    </div>
`;

const dashboardView = (allFruits, accessToken) => html`
    <h2>Fruits</h2>
    <section id="dashboard">
    ${allFruits.length > 0
        ?
        allFruits.map(x => fruitTemplate(x, accessToken))
        :
        html`<h2>No fruit info yet.</h2>`
    }
    </section>
`;

export const renderDashboard = async (ctx) => {
    const allFruits = await getAll();
    const accessToken = JSON.parse(localStorage.getItem('user'))?.accessToken;
    ctx.mainRender(dashboardView(allFruits, accessToken));
};