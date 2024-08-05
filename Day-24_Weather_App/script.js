const apiKey = "aa84eb25adbcc40cd3fb753274bf24c2";

document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});


document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
            document.querySelector('.weather-info').innerHTML = weatherInfo;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});


document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error fetching the forecast data:', error));
});


document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list.slice(0, 5).map(item => {
                const date = new Date(item.dt * 1000).toLocaleDateString();
                return `
                    <div class="forecast-item">
                        <p>${date}</p>
                        <p>Temperature: ${item.main.temp}°C</p>
                        <p>Condition: ${item.weather[0].description}</p>
                    </div>
                `;
            }).join('');
            document.querySelector('.weather-info').innerHTML = forecast;
        })
        .catch(error => console.error('Error fetching the forecast data:', error));
});


document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list.slice(0, 5).map(item => {
                const date = new Date(item.dt * 1000).toLocaleDateString();
                const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
                return `
                    <div class="forecast-item">
                        <p>${date}</p>
                        <img src="${icon}" alt="${item.weather[0].description}">
                        <p>Temperature: ${item.main.temp}°C</p>
                        <p>Condition: ${item.weather[0].description}</p>
                    </div>
                `;
            }).join('');
            document.querySelector('.weather-info').innerHTML = forecast;
        })
        .catch(error => console.error('Error fetching the forecast data:', error));
});
