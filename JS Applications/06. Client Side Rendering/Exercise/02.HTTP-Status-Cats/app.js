import { cats } from './catSeeder.js';

const section = document.querySelector('#allCats');

const catTemplate = (cat) => {
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.src = "./images/" + cat.imageLocation + ".jpg";
    img.width = 250;
    img.height = 250;
    img.alt = "Card image cap";
    li.appendChild(img);

    let div = document.createElement("div");
    div.className = "info";

    let button = document.createElement("button");
    button.className = "showBtn";
    button.textContent = "Show status code";

    button.addEventListener('click', (ev) => {
        if (ev.target.textContent === 'Show status code') {
            ev.target.textContent = 'Hide status code';
            ev.target.parentNode.querySelector('.status').style.display = 'block';
        } else {
            ev.target.textContent = 'Show status code';
            ev.target.parentNode.querySelector('.status').style.display = 'none';
        }
    });
    div.appendChild(button);

    let statusDiv = document.createElement("div");
    statusDiv.className = "status";
    statusDiv.style.display = "none";
    statusDiv.id = "500";

    let h4 = document.createElement("h4");
    h4.textContent = "Status Code: " + cat.statusCode;
    statusDiv.appendChild(h4);

    let p = document.createElement("p");
    p.textContent = cat.statusMessage;
    statusDiv.appendChild(p);

    div.appendChild(statusDiv);

    li.appendChild(div);

    return li;
}

let templates = cats.map(cat => catTemplate(cat));

let ul = document.createElement('ul');
ul.classList.add('cats');

templates.forEach(x => {
    ul.appendChild(x);
});

section.appendChild(ul);