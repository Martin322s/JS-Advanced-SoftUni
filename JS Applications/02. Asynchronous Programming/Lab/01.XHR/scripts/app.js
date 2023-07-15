function loadRepos() {
    let httpRequest = new XMLHttpRequest();
    let url = 'https://api.github.com/users/testnakov/repos';
    let result = document.getElementById('res');

    httpRequest.addEventListener('readystatechange', () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            result.textContent = httpRequest.responseText;
        }
    });

    httpRequest.open('GET', url);
    httpRequest.send();
}