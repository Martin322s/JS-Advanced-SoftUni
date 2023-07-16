const url = 'http://localhost:3030/jsonstore/collections/students';
const form = document.getElementById('form');
const tbody = document.querySelector('#results tbody');

fetch(url)
    .then(res => res.json())
    .then(result => {
        Object.values(result)
            .forEach(x => {
                let tr = createRow(x);
                tbody.appendChild(tr);
            });
    });

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    const data = { firstName, lastName, facultyNumber, grade: Number(grade) };

    if (!Object.values(data).some(x => x === '')) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                let tr = createRow(result);
                tbody.appendChild(tr);
            });

        ev.currentTarget.reset();
    }
});

function createRow(data) {
    let tr = document.createElement('tr');
    let tdFirstName = document.createElement('td');
    let tdLastName = document.createElement('td');
    let tdFacultyNumber = document.createElement('td');
    let tdGrade = document.createElement('td');

    tdFirstName.textContent = data.firstName;
    tdLastName.textContent = data.lastName;
    tdFacultyNumber.textContent = data.facultyNumber;
    tdGrade.textContent = data.grade;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdFacultyNumber);
    tr.appendChild(tdGrade);

    return tr;
}