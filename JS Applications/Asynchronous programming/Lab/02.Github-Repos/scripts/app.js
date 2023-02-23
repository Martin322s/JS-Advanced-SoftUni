function loadRepos() {

	const username = document.getElementById('username');
	const ulRepos = document.getElementById('repos');
	const url = `https://api.github.com/users/${username.value}/repos`;

	fetch(url)
		.then(res => res.json())
		.then(data => {
			for (let repo of data) {
				let liElement = document.createElement('li');
				let a = document.createElement('a');
				a.setAttribute('href', `${repo.html_url}`);
				a.textContent = `${repo.full_name}`;

				liElement.appendChild(a);
				ulRepos.appendChild(liElement);
			}
		})
		.catch(error => console.log(error));
}