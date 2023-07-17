import page from "../../node_modules/page/page.mjs";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { editRecipe, getOne } from "../api-calls.js";

const editPage = (details, id, token) => html`
<div class="container">
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${(ev) => submit(ev, id, token)}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make" value=${details.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model" value=${details.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year" value=${details.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description" value=${details.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" value=${details.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" value=${details.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" value=${details.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
</div>
`;

export const renderEdit = async (ctx) => {
    const offerId = ctx.params.offerId;
    const details = await getOne(offerId);
    const token = JSON.parse(localStorage.getItem('user')).accessToken;
    ctx.mainRender(editPage(details, offerId, token));
}

function submit(ev, offerId, token) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const make = formData.get('make');
    const model = formData.get('make');
    const year = formData.get('year');
    const description = formData.get('description');
    const price = formData.get('price');
    const img = formData.get('img');
    const material = formData.get('material');
    const data = { make, model, year, description, price, img, material };

    if (!Object.values(data).some(x => x === '')) {
        editRecipe(data, token, offerId)
            .then(() => page.redirect(`/details/${offerId}`));
    }
}