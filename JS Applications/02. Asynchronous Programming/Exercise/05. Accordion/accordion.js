function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details';
    const main = document.getElementById('main');

    fetch(url)
        .then(res => res.json())
        .then(list => {
            list.forEach(element => {
                let card = createCard(element);
                main.appendChild(card);
            });

            let buttons = Array.from(document.querySelectorAll('.button'));

            buttons.forEach(x => {
                x.addEventListener('click', (ev) => {
                    getArticleById(detailsUrl, ev.target.id)
                        .then(data => {
                            if (ev.target.textContent === "More") {
                                ev.target.textContent = "Less";
                                let card = detailsCard(data);
                                card.style.display = "block";
                                ev.target.parentNode.parentNode.appendChild(card);
                            } else {
                                ev.target.textContent = "More";
                                document.querySelector('.extra').style.display = "none";
                                document.querySelector('.extra').remove();
                            }
                        });
                });
            });
        });

    async function getArticleById(url, id) {
        let res = await fetch(url + '/' + id);
        let data = await res.json();
        return data;
    }

    function createCard(card) {
        let divElement = document.createElement('div');
        let divSecondElement = document.createElement('div');
        let span = document.createElement('span');
        let button = document.createElement('button');

        divElement.classList.add('accordion');
        divSecondElement.classList.add('head');
        button.classList.add('button');

        button.setAttribute('id', card._id);
        span.textContent = card.title;
        button.textContent = 'More';

        divSecondElement.appendChild(span);
        divSecondElement.appendChild(button);
        divElement.appendChild(divSecondElement);

        return divElement;
    }

    function detailsCard(data) {
        let div = document.createElement('div');
        let p = document.createElement('p');

        div.classList.add('extra');
        p.textContent = data.content;
        
        div.appendChild(p);

        return div;
    }
}
solution();