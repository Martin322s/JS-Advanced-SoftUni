function solve() {
    let stop = { next: 'depot' };
    let divElement = document.querySelector('#info span');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    const url = `http://localhost:3030/jsonstore/bus/schedule`;

    function depart() {
        fetch(`${url}/${stop.next}`)
            .then(res => res.json())
            .then(data => {
                stop = data;
                divElement.textContent = `Next stop ${data.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(() => divElement.textContent = "Error");
    }

    function arrive() {
        divElement.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();