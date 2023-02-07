function addItem() {

    const newItem = document.getElementById('newItemText').value;
    const ulElement = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = newItem;

    const deleteElement = document.createElement('a');
    deleteElement.setAttribute('href', '#');
    deleteElement.textContent = '[Delete]';

    liElement.appendChild(deleteElement);
    ulElement.appendChild(liElement);

    deleteElement.addEventListener('click', (ev) => {
        ev.preventDefault();

        ulElement.removeChild(liElement);
    });
}