function deleteByEmail() {

    const tdElements = document.querySelectorAll('tr td:nth-of-type(2)');
    const inputElement = document.querySelector('input[type="text"]').value;
    const resultElement = document.getElementById('result');

    for (let email of tdElements) {
        if (inputElement === email.textContent) {
            email.parentNode.remove();
            resultElement.textContent = 'Deleted.';
            inputElement.textContent = '';
        } else {
            resultElement.textContent = 'Not found.';
            inputElement.textContent = '';
        }
    }
}