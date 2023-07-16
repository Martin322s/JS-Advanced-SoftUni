function attachEvents() {
    const phoneBookList = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', () => {
        getAllPhones()
            .then(data => {
                phoneBookList.replaceChildren();

                Object.values(data)
                    .forEach(x => {
                        let liElement = document.createElement('li');
                        let deleteBtn = document.createElement('button');

                        liElement.textContent = `${x.person}: ${x.phone}`;
                        deleteBtn.textContent = 'Delete';

                        liElement.appendChild(deleteBtn);
                        phoneBookList.appendChild(liElement);

                        deleteBtn.addEventListener('click', () => {
                            fetch(`http://localhost:3030/jsonstore/phonebook/${x._id}`, {
                                method: 'DELETE',
                            })
                                .then(res => res.json())
                                .then(() => {
                                    loadBtn.click();
                                });
                        });
                    });
            });
    });

    createBtn.addEventListener('click', () => {
        if (personInput.value !== '' && phoneInput.value !== '') {
            fetch(`http://localhost:3030/jsonstore/phonebook`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ person: personInput.value, phone: phoneInput.value })
            })
                .then(res => res.json())
                .then(() => {
                    loadBtn.click();
                    personInput.value = '';
                    phoneInput.value = '';
                });
        }
    });

    async function getAllPhones() {
        const res = await fetch(`http://localhost:3030/jsonstore/phonebook`);
        return await res.json();
    }
}
attachEvents();