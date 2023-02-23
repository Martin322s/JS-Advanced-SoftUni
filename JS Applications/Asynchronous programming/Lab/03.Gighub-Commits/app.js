function loadCommits() {

    let url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;
    let username = document.getElementById(`username`);
    let repo = document.getElementById(`repo`);
    let ulEl = document.getElementById(`commits`);

    ulEl.innerHTML = ``;

    fetch(url)
        .then(response => {
            if (response.ok === false) {
                let error = `${response.status} (Not found)`;
                throw new Error(error);
            }

            return response.json();
        })
        .then(data => {
            Object.entries(data).forEach(el => {
                let li = document.createElement(`li`);
                li.textContent = `${el[1].commit.author.name} : ${el[1].commit.message}`;
                ulEl.appendChild(li)
            })
        })
        .catch(error => {
            let li = document.createElement('li');
            li.textContent = `${error}`
            ulEl.appendChild(li);
        });
}
