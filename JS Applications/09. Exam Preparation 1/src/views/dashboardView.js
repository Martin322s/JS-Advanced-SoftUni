import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../services/fruitService.js';

const fruitTemplate = (fruit) => html`
    <div class="fruit">
        <img src=${fruit.imageUrl} alt="example1" />
        <h3 class="title">${fruit.name}</h3>
        <p class="description">
            ${fruit.description}
        </p>
            <a class="details-btn" href="/details/${fruit._id}">More Info</a>
    </div>
`;

const dashboardView = (allFruits, accessToken) => html`
    <h2>Fruits</h2>
    
    ${allFruits.length > 0
        ?
        html`
        <section id="dashboard">
            ${allFruits.map(x => fruitTemplate(x, accessToken))}
        </section>
        `
        :
        html`<h2>No fruit info yet.</h2>`
    }
    
`;

export const renderDashboard = async (ctx) => {
    const allFruits = await getAll();
    ctx.mainRender(dashboardView(allFruits));
};