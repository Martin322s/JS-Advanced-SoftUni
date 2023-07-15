function loadRepos() {
	const username = document.getElementById('username');
	const reposUl = document.getElementById('repos');
	const url = `https://api.github.com/users/${username.value}/repos`;

	reposUl.innerHTML = '';

	fetch(url)
		.then(res => res.json())
		.then(result => {
			if (result.message === "Not Found") {
				let liElement = document.createElement('li');
				let aElement = document.createElement('a');

				aElement.textContent = 'Documentation Url';
				aElement.setAttribute('href', result.documentation_url);

				liElement.appendChild(aElement);
				reposUl.appendChild(liElement);
			} else {
				for (let repo of result) {
					let liElement = document.createElement('li');
					let aElement = document.createElement('a');

					aElement.textContent = repo.full_name;
					aElement.setAttribute('href', repo.url);

					liElement.appendChild(aElement);
					reposUl.appendChild(liElement);
				}
			}
		});
}