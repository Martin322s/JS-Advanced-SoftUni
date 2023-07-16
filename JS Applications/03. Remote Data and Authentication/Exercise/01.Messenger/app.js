function attachEvents() {
    const username = document.querySelector('input[name="author"]');
    const message = document.querySelector('input[name="content"]');
    const sendBtn = document.getElementById('submit');
    const messages = document.getElementById('messages');
    const refreshBtn = document.getElementById('refresh');
    const url = 'http://localhost:3030/jsonstore/messenger';

    refreshBtn.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const messagesArray = Object.values(data).map(x => `${x.author}: ${x.content}`);
                messages.textContent = messagesArray.join('\n');
            });
    });

    sendBtn.addEventListener('click', () => {
        const author = username.value;
        const content = message.value;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, content })
        });

        username.value = '';
        message.value = '';
    });
}
attachEvents();