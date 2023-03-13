function attachEvents() {

    // Taking DOM references and setting URL address
    const url = " http://localhost:3030/jsonstore/phonebook";
    const phonebookList = document.getElementById("phonebook");
    const loadBtn = document.getElementById("btnLoad");
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const createBtn = document.getElementById("btnCreate");

    // Attach event listeners
    loadBtn.addEventListener("click", loadPhones);
    createBtn.addEventListener("click", createPhone);

    // Load all phones
    function loadPhones() {
        phonebookList.replaceChildren();
        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(phone => {
                    const liElement = document.createElement("li");
                    liElement.textContent = `${phone.person}: ${phone.phone}`;
                    liElement.setAttribute('id', phone._id);
                    phonebookList.appendChild(liElement);

                    const delBtn = document.createElement("button");
                    delBtn.textContent = "Delete";
                    liElement.appendChild(delBtn);

                    delBtn.addEventListener("click", deletePhone);
                });
            });
    }

    // Create new phone
    function createPhone() {
        let person = personInput.value;
        let phone = phoneInput.value;
        let phoneData = { person, phone };

        if (personInput.value !== '' && phoneInput.value !== '') {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(phoneData)
            });
            loadBtn.click();
            personInput.value = "";
            phoneInput.value = "";
        }
    }

    // Delete phone by ID
    function deletePhone(ev) {
        const id = ev.target.parentElement.id;
        fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        loadBtn.click();
    }
}
attachEvents();