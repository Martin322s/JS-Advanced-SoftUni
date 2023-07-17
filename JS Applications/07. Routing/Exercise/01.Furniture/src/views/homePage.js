import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api-calls.js";

const furnitureTemplate = (furniture, token) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                    <img src=${furniture.img} />
                    <p>${furniture.description}</p>
                    <footer>
                        <p>Price: <span>${furniture.price} $</span></p>
                    </footer>
    ${token !== undefined
        ?
        html`<div>
                <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
            </div>`
        : null
    }
            </div>
        </div>
    </div>
`;

const homePageTemplate = (all, token) => html`
<div class="container">
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${all.map(x => furnitureTemplate(x, token))}
</div>
</div>
`;

export const renderHome = async (ctx) => {
    const allFurnitures = await getAll();
    const token = JSON.parse(localStorage.getItem('user'))?.accessToken;
    ctx.mainRender(homePageTemplate(allFurnitures, token));
}