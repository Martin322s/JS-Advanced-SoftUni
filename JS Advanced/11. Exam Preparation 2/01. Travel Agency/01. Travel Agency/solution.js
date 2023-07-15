window.addEventListener('load', solution);

function solution() {
    const submitBtn = document.getElementById('submitBTN');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');
    const block = document.getElementById('block');
    const ulElement = document.getElementById('infoPreview');

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    let inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
    inputValues.pop();
    let labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));

    submitBtn.addEventListener('click', (ev) => {
        if (inputValues[0].value !== '' && inputValues[1].value !== '') {
            for (let i = 0; i < inputValues.length; i++) {
                let liElement = document.createElement('li');
                liElement.innerText = `${labelValues[i].innerText} ${inputValues[i].value}`;
                ulElement.appendChild(liElement);
                inputValues[i].value = '';
            }

            ev.target.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;
        }
    });

    editBtn.addEventListener('click', (ev) => {
        const listItems = Array.from(ulElement.childNodes);
        for (let i = 0; i < inputValues.length; i++) {
            inputValues[i].value = listItems[i].textContent.split(': ')[1];
            listItems[i].remove();

        }

        submitBtn.disabled = false;
        ev.target.disabled = true;
        continueBtn.disabled = true;

    });

    continueBtn.addEventListener('click', () => {
        block.innerHTML = '';
        let h3 = document.createElement('h3');
        h3.textContent = 'Thank you for your reservation!';
        block.appendChild(h3);
    });
}