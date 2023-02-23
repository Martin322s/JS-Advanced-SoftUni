function extractText() {

    const ulElement = document.getElementsByTagName('li');
    const result = document.getElementById('result');
    const arr = Array.from(ulElement);

    for (let element of arr) {
        result.textContent += element.textContent + '\n';
    }
}