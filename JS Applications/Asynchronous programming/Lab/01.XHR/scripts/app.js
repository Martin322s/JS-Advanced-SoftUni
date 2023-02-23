function loadRepos() {

    const url = 'https://api.github.com/users/testnakov/repos';
    const divResult = document.getElementById('res');
    const httpRequest = new XMLHttpRequest();

    httpRequest.addEventListener('readystatechange', () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            divResult.textContent = httpRequest.responseText;
        }
    });

    httpRequest.open('GET', url);
    httpRequest.send();
}