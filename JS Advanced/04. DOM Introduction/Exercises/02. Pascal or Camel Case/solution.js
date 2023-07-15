function solve() {
    const text = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');
    let finalString = '';

    if (convention === "Camel Case") {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                finalString += (text[i + 1].toUpperCase());
                i++;
            } else {
                finalString += (text[i].toLowerCase());
            }
        }
    } else if (convention === "Pascal Case") {
        finalString += (text[0].toUpperCase());
        for (let i = 1; i < text.length; i++) {
            if (text[i] === ' ') {
                console.log(finalString);
                finalString += (text[i + 1].toUpperCase());
                i++;
            } else {
                finalString += (text[i].toLowerCase());
            }
        }
    } else {
        finalString = "Error!";
    }

    result.textContent = finalString;
}