function solve() {
    
    // Taking DOM references and stting the first bus stop
    let divElement = document.querySelector('#info span');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let stop = { next: 'depot' };
   
    // Asynchronous GET request about bus departure
    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        let res = await fetch(url);
        let data = await res.json();
        stop = data;
    
        divElement.textContent = `Next stop ${stop.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    // Asynchronous function about arriving
    async function arrive() {
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