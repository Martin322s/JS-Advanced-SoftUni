function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');

    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.entries(data).forEach((e, i) => {
                createProfile(i + 1, e[1].username, e[1].email, e[1].age);
            });
        })
        .catch(() => {
            main.innerHTML = '';
            let errorMessage = createElement('h1', [], 'ERROR');
            main.appendChild(errorMessage);
        });

    function createProfile(i, username, email, age) {
        let profileEl = createElement('div', ['class', 'profile']);
        let img = createElement('img', [
            'src',
            './iconProfile2.png',
            'class',
            'userIcon',
        ]);

        let lockLabel = createElement('label', [], 'Lock');
        let lockRadio = createElement('input', [
            'type',
            'radio',
            'name',
            `user${i}Locked`,
            'value',
            'lock',
            'checked',
            true,
        ]);

        let unlockLabel = createElement('label', [], 'Unlock');
        let unlockRadio = createElement('input', [
            'type',
            'radio',
            'name',
            `user${i}Locked`,
            'value',
            'unlock',
        ]);

        let br = createElement('br');
        let hr = createElement('hr');
        let usernameLabel = createElement('label', [], 'Username');
        let usernameEl = createElement('input', [
            'type',
            'text',
            'name',
            `user${i}Username`,
            'value',
            username,
            'disabled',
            'disabled',
            'readonly',
            'readonly',
        ]);
        let hiddenFieldsDiv = createElement('div', [
            'id',
            `user${i}HiddenFields`,
        ]);
        
        hiddenFieldsDiv.style.display = 'none';
        let hr2 = createElement('hr');
        let emailLabel = createElement('label', [], 'Email:');
        let emailEl = createElement('input', [
            'type',
            'email',
            'name',
            `user${i}Email`,
            'value',
            email,
            'disabled',
            'disabled',
            'readonly',
            'readonly',
        ]);
        let ageLabel = createElement('label', [], 'Age:');
        let ageEl = createElement('input', [
            'type',
            'email',
            'name',
            `user${i}Age`,
            'value',
            age,
            'disabled',
            'disabled',
            'readonly',
            'readonly',
        ]);
        let showMoreBtn = createElement('button', [], 'Show more');
        showMoreBtn.addEventListener('click', toggleHandler);

        hiddenFieldsDiv.appendChild(hr2);
        hiddenFieldsDiv.appendChild(emailLabel);
        hiddenFieldsDiv.appendChild(emailEl);
        hiddenFieldsDiv.appendChild(ageLabel);
        hiddenFieldsDiv.appendChild(ageEl);
        profileEl.appendChild(img);
        profileEl.appendChild(lockLabel);
        profileEl.appendChild(lockRadio);
        profileEl.appendChild(unlockLabel);
        profileEl.appendChild(unlockRadio);
        profileEl.appendChild(br);
        profileEl.appendChild(hr);
        profileEl.appendChild(usernameLabel);
        profileEl.appendChild(usernameEl);
        profileEl.appendChild(hiddenFieldsDiv);
        profileEl.appendChild(showMoreBtn);
        main.appendChild(profileEl);
    }

    function toggleHandler(e) {
        let button = e.target;
        let hiddenDiv = button.parentElement.querySelector('div');
        let unlockRadio = button.parentElement.querySelector(
            'input[type="radio"][value="unlock"]',
        );

        if (unlockRadio.checked && hiddenDiv.style.display == 'none') {
            hiddenDiv.style.display = 'block';
            button.textContent = 'Hide it';
        } else if (unlockRadio.checked && hiddenDiv.style.display == 'block') {
            hiddenDiv.style.display = 'none';
            button.textContent = 'Show more';
        }
    }

    function createElement(tag, attributes = [], content) {
        let element = document.createElement(tag);

        if (attributes.length > 0) {
            for (let i = 0; i < attributes.length; i += 2) {
                let name = attributes[i];
                let value = attributes[i + 1];
                element.setAttribute(name, value);
            }
        }

        if (content) {
            element.textContent = content;
        }
        return element;
    }
}