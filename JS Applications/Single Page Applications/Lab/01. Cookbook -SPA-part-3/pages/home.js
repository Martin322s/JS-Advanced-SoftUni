const homeNavigation = document.querySelector('.home');

export function renderHome() {
    homeNavigation.innerHTML = "";
    fetch('http://localhost:3030/data/recipes')
        .then(res => res.json())
        .then(recipes => {
            Object.values(recipes).forEach(recipe => {
                homeNavigation.appendChild(renderRecipe(recipe));
                homeNavigation.style.display = 'block';

            });
        });
}

function renderRecipe(recipe) {
    let recipeElement = document.createElement('article');
    recipeElement.classList.add('preview');
    recipeElement.setAttribute("id", recipe._id);

    recipeElement.innerHTML =
        `<div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>`;
    return recipeElement;
}