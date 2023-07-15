class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.title = document.createElement('div');
    }

    get online() {
        return this._online;
    }

    set online(status) {
        this._online = status;
        if (this._online) {
            this.title.classList.add('online');
        } else {
            this.title.classList.remove('online');
        }
    }

    render(id) {
        const element = document.getElementById(id);
        const article = document.createElement('article');
        const title = this.title;

        title.classList.add('title');
        title.textContent = this.firstName + ' ' + this.lastName;

        const button = document.createElement('button');
        button.textContent = '\u2139';
        title.appendChild(button);

        const info = document.createElement('div');
        info.classList.add('info');

        const phone = document.createElement('span');
        const email = document.createElement('span');

        phone.textContent = '\u260E ' + this.phone;
        email.textContent = '\u2709 ' + this.email;

        info.appendChild(phone);
        info.appendChild(email);
        info.style.display = 'none';

        button.addEventListener('click', function (event) {
            event.preventDefault();
            const display = info.style.display;
            if (display === 'block') {
                info.style.display = 'none';
            } else {
                info.style.display = 'block';
            }
        });

        article.appendChild(title);
        article.appendChild(info);
        element.appendChild(article);
    }
}