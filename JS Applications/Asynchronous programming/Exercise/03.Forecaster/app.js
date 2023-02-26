function attachEvents() {

    // Take DOM references and setting URL address
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const forecastDiv = document.querySelector('#forecast');
    const currentWeatherDiv = document.querySelector('#current');
    const upcomingWeatherDiv = document.querySelector('#upcoming');
    const label1 = document.querySelector('#current div.label');
    const label2 = document.querySelector('#upcoming div.label');
    const location = document.querySelector('#location');
    const submitBtn = document.querySelector('#submit');
 
    // Object holding symbols
    const symbols = {
        'Partly sunny': '⛅',
        Sunny: '☀',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°',
    };
 
    // Submit button add event function
    submitBtn.addEventListener('click', () => {
    
        if (location.value) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let [city] = data.filter(c => c.name === location.value);

                    forecastDiv.style.display = 'block';
                    currentWeatherDiv.innerHTML = '';
                    upcomingWeatherDiv.innerHTML = '';
                    currentWeatherDiv.appendChild(label1);
                    upcomingWeatherDiv.appendChild(label2);
 
                    getCurrentWeather(city.code);
                    getFutureWeather(city.code);
                })
                .catch(() => (forecastDiv.textContent = 'Error'));
        }
    });
    
    // Current weather function 
    function getCurrentWeather(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
 
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let forecast = createElement('div', ['forecasts']);
                let symbol = createElement(
                    'span',
                    ['condition', 'symbol'],
                    symbols[data.forecast.condition],
                );
                let info = createElement('div', ['condition']);
                let cityName = createElement(
                    'span',
                    ['forecast-data'],
                    data.name,
                );
                let degrees = createElement(
                    'span',
                    ['forecast-data'],
                    `${data.forecast.low}${symbols.Degrees}/${data.forecast.high}${symbols.Degrees}`,
                );
                let condition = createElement(
                    'span',
                    ['forecast-data'],
                    data.forecast.condition,
                );
                info.appendChild(cityName);
                info.appendChild(degrees);
                info.appendChild(condition);
                forecast.appendChild(symbol);
                forecast.appendChild(info);
                currentWeatherDiv.appendChild(forecast);
            })
            .catch(() => (forecastDiv.textContent = 'Error'));
    }
 
    // Future weather function
    function getFutureWeather(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
 
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let forecast = createElement('div', ['forecast-info']);
                data.forecast.forEach(day => {
                    let entry = createElement('span', ['upcoming']);
                    let symbol = createElement(
                        'span',
                        ['symbol'],
                        symbols[day.condition],
                    );
                    let degrees = createElement(
                        'span',
                        ['forecast-data'],
                        `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`,
                    );
                    let condition = createElement(
                        'span',
                        ['forecast-data'],
                        day.condition,
                    );
                    entry.appendChild(symbol);
                    entry.appendChild(degrees);
                    entry.appendChild(condition);
                    forecast.appendChild(entry);
                });
                upcomingWeatherDiv.appendChild(forecast);
            })
            .catch(() => (forecastDiv.textContent = 'Error'));
    }

    // Function for creating elements
    function createElement(tag, classAttributes = [], content) {
        let element = document.createElement(tag);
 
        if (classAttributes.length > 0) {
            for (const cl of classAttributes) {
                element.classList.add(cl);
            }
        }
        if (content) {
            element.textContent = content;
        }
        return element;
    }
}
attachEvents();