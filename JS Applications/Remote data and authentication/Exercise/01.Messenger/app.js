function attachEvents() {
    // Taking DOM references and stting URL address
    const url = "http://localhost:3030/jsonstore/messenger";
    const messages = document.getElementById("messages");
    const submitBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");
    const authorInput = document.querySelector("#author");
    const messageInput = document.querySelector("#content");

    // Attach event listeners
    submitBtn.addEventListener("click", postMessage);
    refreshBtn.addEventListener("click", loadAllMessages);

    // Post new message functionality
    function postMessage() {
        let author = authorInput.value;
        let content = messageInput.value;
        const mess = { author, content };

        if (authorInput.value !== "" && messageInput.value !== "") {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mess)
            });
        }
        refreshBtn.click();
        authorInput.value = "";
        messageInput.value = "";
    }

    // Load all messages
    function loadAllMessages() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                messages.value = Object.values(data)
                    .map(({ author, content }) => {
                        return `${author}: ${content}`;
                    })
                    .join("\n");
            });
    }
}
attachEvents();