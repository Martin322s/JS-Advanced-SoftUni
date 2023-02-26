function createRecipe() {

    const url = "http://localhost:3030/data/recipes";
    const createFromElement = document.querySelector('form');

    createFromElement.addEventListener('submit', (ev) => {
        ev.preventDefault();

        let formData = new FormData(ev.currentTarget);
        let title = formData.get('name');
        let img = formData.get('img');
        let ingredients = formData.get('ingredients').split('\n').join('');
        let steps = formData.get('steps').split('\n').join('');

        let data = {
            title,
            img,
            ingredients,
            steps
        };

        let accessToken = localStorage.getItem('accessToken');

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(recipe => {
                console.log(recipe);
            })
            .catch(error => {
                console.log(error);
            });
    });
}
createRecipe();