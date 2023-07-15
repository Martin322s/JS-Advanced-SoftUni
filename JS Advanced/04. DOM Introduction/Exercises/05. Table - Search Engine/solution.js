function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let input = document.getElementById("searchField");
    let rows = document.querySelectorAll('tbody tr');

    function onClick() {
        for (let row of rows) {
            row.classList.remove('select');
            if (input.value !== "" &&
                row.innerHTML
                    .toLowerCase()
                    .includes(input.value.toLowerCase())
            ) {
                row.classList.add('select');
            }
        }

        input.value = "";
    }
}