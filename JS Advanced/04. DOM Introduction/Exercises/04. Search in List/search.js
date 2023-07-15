function search() {
    let listOfTowns = Array.from(document.querySelectorAll('#towns li'));
    let searchText = document.getElementById('searchText').value;
    let resultField = document.getElementById('result');
    let count = 0;

    for (let list of listOfTowns) {
        if (list.textContent.toLowerCase().includes(searchText.toLowerCase())) {
            list.style.fontWeight = "bold";
            list.style.textDecoration = "underline";
            count++;
        } else {
            list.style.fontWeight = "normal";
            list.style.textDecoration = "none";
        }
    }

    resultField.textContent = `${count} matches found`;
    document.getElementById('searchText').value = "";
}