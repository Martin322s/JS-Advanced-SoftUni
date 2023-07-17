import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOwned } from "../api-calls.js";

const furnitureTemplate = (details) => html`
<div class="col-md-4">
<div class="card text-white bg-primary">
    <div class="card-body">
        <img src=${details.img} />
        <p>${details.description}</p>
        <footer>
            <p>Price: <span>${details.price} $</span></p>
        </footer>
        <div>
            <a href="/details/${details._id}" class="btn btn-info">Details</a>
        </div>
    </div>
</div>
</div>
`;

const myCatalog = (all) => html`
<div class="container">
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${all.length > 0
        ?
        all.map(x => furnitureTemplate(x))
        : html`<h1>There are no created publications yet.</h1>`
    }
</div>
</div>
`;

export const renderOwned = async (ctx) => {
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    const owned = await getAllOwned(userId);
    ctx.mainRender(myCatalog(owned));
}