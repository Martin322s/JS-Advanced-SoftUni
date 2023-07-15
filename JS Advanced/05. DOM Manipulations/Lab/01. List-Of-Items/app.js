function addItem() {

    const newItem = document.getElementById('newItemText').value;
    const ulElement = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = newItem;

    ulElement.appendChild(liElement);
    newItem = '';
}