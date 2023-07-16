const loadAllBooksButton = document.getElementById('loadBooks')
const formElement = document.querySelector('form');
const url = 'http://localhost:3030/jsonstore/collections/books'

loadAllBooksButton.addEventListener('click', loadAllBooks);
formElement.addEventListener('submit', submitFormHandler)
window.addEventListener('load', loadAllBooks);

function loadAllBooks() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const booksTable = document.getElementById('books');

            booksTable.innerHTML = '';

            for (const key in data) {
                let trElement = document.createElement('tr')
                trElement.id = key;

                let titleElement = document.createElement('td');
                titleElement.textContent = data[key].title;
                trElement.appendChild(titleElement)

                let authorElement = document.createElement('td')
                authorElement.textContent = data[key].author;
                trElement.appendChild(authorElement);

                let buttonsTdElement = document.createElement('td');

                let editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', editBookButtonClick);
                buttonsTdElement.appendChild(editButton);

                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', deleteBook);
                buttonsTdElement.appendChild(deleteButton);

                trElement.appendChild(buttonsTdElement);
                booksTable.appendChild(trElement);
            }
        })
}

function submitFormHandler(ev) {
    ev.preventDefault();

    if (ev.currentTarget.querySelector('button').textContent === 'Submit') {
        createBook(ev);
    } else {
        editBookRecord(ev);
    }
}


function createBook(ev) {
    const formData = new FormData(ev.target);
    let title = formData.get('title');
    let author = formData.get('author');

    if (!title || !author) {
        return alert('Invalid input.');
    }

    const bookObj = {
        author,
        title
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookObj)
    })
        .then(() => {

            ev.target.reset();
            loadAllBooksButton.click();
        })
}

function editBookButtonClick(ev) {
    formElement.querySelector('h3').textContent = 'Edit FORM';
    formElement.querySelector('button').textContent = 'Save';

    fetch(`${url}/${ev.target.parentNode.parentNode.id}`)
        .then(res => res.json())
        .then(data => {
            formElement.getElementsByTagName('input')[0].value = data.title;
            formElement.getElementsByTagName('input')[1].value = data.author;
            formElement.id = ev.target.parentNode.parentNode.id
        });

}

function editBookRecord(ev) {
    const formData = new FormData(ev.target)
    let title = formData.get('title');
    let author = formData.get('author');

    if (!title || !author) {
        return alert('Invalid input.');
    }

    const bookObj = {
        author,
        title
    }

    fetch(`${url}/${ev.target.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookObj)
    })
        .then(() => {
            ev.target.reset();
            ev.target.querySelector('h3').textContent = 'FORM';
            ev.target.querySelector('button').textContent = 'Submit';
            ev.target.id = '';
            loadAllBooksButton.click();
        })
}

function deleteBook(ev) {
    fetch(`${url}/${ev.target.parentNode.parentNode.id}`, {
        method: 'DELETE'
    })
        .then(() => {
            loadAllBooksButton.click();
        })
}