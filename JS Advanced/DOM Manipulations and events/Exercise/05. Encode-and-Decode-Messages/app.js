function encodeAndDecodeMessages() {

    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        let decodedMessages = document.getElementsByTagName('textarea')[0];
        let encodedMessages = document.getElementsByTagName('textarea')[1];

        if (e.target.textContent.includes('Encode')) {
            let message = decodedMessages.value;
            let encoded = [];

            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                encoded.push(String.fromCharCode(currSymbol + 1));
            }
            decodedMessages.value = '';
            encodedMessages.value = encoded.join("");
        } else if (e.target.textContent.includes('Decode')) {
            let message = encodedMessages.value;
            let decoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                decoded.push(String.fromCharCode(currSymbol - 1));
            }
            encodedMessages.value = decoded.join("");
        }
    });
}