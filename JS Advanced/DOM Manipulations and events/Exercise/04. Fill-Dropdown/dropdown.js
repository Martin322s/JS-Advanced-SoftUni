function addItem() {

    const menu = document.getElementById('menu');
    const newItem = document.getElementById('newItemText').value;
    const newValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.textContent = newItem;
    option.value = newValue;

    menu.appendChild(option);

    newItem = '';
    newValue = '';
}