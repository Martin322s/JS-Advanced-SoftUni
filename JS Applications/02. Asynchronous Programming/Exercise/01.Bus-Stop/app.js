function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const stopId = document.getElementById('stopId');
    const submitButton = document.getElementById('submit');
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    submitButton.addEventListener('click', () => {
        fetch(`${baseUrl}/${stopId.value}`)
            .then(res => res.json())
            .then(buses => {
                busesList.innerHTML = '';

                if (stopId.value !== "") {
                    stopName.textContent = buses.name;
                } else {
                    stopName.textContent = 'Error';
                }

                stop.value = "";
                Object.entries(buses.buses)
                    .forEach(x => {
                        let [busId, time] = x;
                        let liElement = document.createElement('li');

                        liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
                        busesList.appendChild(liElement);
                    });
            })
            .catch(() => {
                busesList.innerHTML = '';
                stopName.textContent = 'Error';
            });
    });
}