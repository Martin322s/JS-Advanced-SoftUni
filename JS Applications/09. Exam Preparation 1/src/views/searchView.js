import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchFruit } from '../services/fruitService.js';

const fruitTemplate = () => html`
    <div class="fruit">
        <img src="./images/fruit 1.png" alt="example1" />
        <h3 class="title">Pineapple</h3>
        <p class="description">
            The pineapple is a tropical plant with an edible fruit.
            It is the most economically significant plant in the family Bromeliaceae.The
            pineapple is indigenous to South America.
            Pineapples grow as a small shrub, the individual flowers of the unpollinated plant
            fuse to form a multiple fruit. The plant is normally propagated from the offset produced
            at the top of the fruit,or from a side shoot, and typically matures within a year.
        </p>
        <a class="details-btn" href="">More Info</a>
    </div>
`;

const searchView = (submit, ctx, fruits) => html`
    <section id="search">
        <div class="form">
            <h2>Search</h2>
            <form class="search-form">
                <input type="text" name="search" id="search-input" />
                <button @click=${(ev) => submit(ev, ctx)} class="button-list" type="button">Search</button>
            </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">
    ${fruits.length === 0
        ?
        html`<p class="no-result" style="text-align: center;">No result.</p>`
        :
        fruitTemplate.map(x => fruitTemplate(x))
    }
        </div>
    </section>
`;

export const renderSearch = async (ctx) => {
    const submit = async (ev, ctx) => {
        const input = document.querySelector('#search-input');
        let fruits = await searchFruit(input.value);
        console.log(fruits);
        ctx.mainRender(searchView(submit, ctx, fruits));
    }
    ctx.mainRender(searchView(submit, ctx));
};