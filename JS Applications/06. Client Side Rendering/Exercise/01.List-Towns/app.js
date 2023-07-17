let arrayOfTowns = [];
const inputTowns = document.getElementById('towns');
const loadBtn = document.getElementById('btnLoadTowns');
const rootElement = document.getElementById('root');

loadBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    if (inputTowns.value !== '') {
        rootElement.replaceChildren();
        arrayOfTowns = inputTowns.value.split(', ');

        arrayOfTowns.forEach(x => {
            rootElement.appendChild(createList(x));
        });

        inputTowns.value = '';
    }
});

function createList(text) {
    let ul = document.createElement('ul');
    let liElement = document.createElement('li');

    liElement.textContent = text;
    ul.appendChild(liElement);

    return ul;
}