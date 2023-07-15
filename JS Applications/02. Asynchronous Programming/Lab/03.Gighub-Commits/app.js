function loadCommits() {
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits');
    const url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;


    fetch(url)
        .then(res => {
            if (res.status !== 200) {
                return res;
            } else {
                return res.json();
            }
        })
        .then(result => {
            if (result.status === 404) {
                let liElement = document.createElement('li');
                liElement.textContent = `Error: ${result.status} (Not Found)`;
                commits.appendChild(liElement);
            } else {
                for (const repo of result) {
                    let liElement = document.createElement('li');
                    liElement.textContent = `${repo.commit.author.name}: ${repo.commit.message}`;
                    commits.appendChild(liElement);
                }
            }
        });
        
    commits.innerHTML = '';
}