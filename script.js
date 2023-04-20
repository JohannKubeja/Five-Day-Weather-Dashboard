function getWeather(city) {
    const apiKey = 'YOUR_API_KEY_HERE';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Update DOM elements with weather data
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('current-date').textContent = new Date().toLocaleDateString();
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      })
      .catch(error => console.log(error));
  }
  