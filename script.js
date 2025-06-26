const defaultCity = 'Colombo';
const apiKey = '6c81856ff0054ebbae275251252406'; 

function updateWeatherUI(data) {
  document.getElementById('temp').textContent = `${data.current.temp_c} °C`;
  document.getElementById('humidity').textContent = `${data.current.humidity} %`;
  document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;
  document.getElementById('uv').textContent = data.current.uv;
  document.getElementById('weatherIcon').src = data.current.condition.icon;
  document.getElementById('weatherIcon').alt = data.current.condition.text;
}

function getWeather(cityName) {
  const city = cityName || document.getElementById('cityInput').value || defaultCity;

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => updateWeatherUI(data))
    .catch(error => {
      alert("City not found!");
      console.error("Error fetching weather data:", error);
    });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Optional: Load Colombo weather on page load
// window.onload = () => getWeather(defaultCity);
