async function getInfo() {

    // Taking DOM references and stting the URL address
    const stopId = document.getElementById("stopId");
    const stopName = document.getElementById("stopName");
    const busesList = document.getElementById("buses");
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;

    try {
        busesList.replaceChildren();

        // Asynchronous GET data request
        const res = await fetch(url);
        const data = await res.json();

        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(bus => {
            let liElement = document.createElement("li");
            liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            busesList.appendChild(liElement);
        });

        // Clearing the input value
        stopId.value = "";

    } catch (error) {
        stopName.textContent = "Error";
    }
}