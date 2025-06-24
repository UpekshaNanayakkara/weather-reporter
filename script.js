const apiKey = '6c81856ff0054ebbae275251252406 '; 
const city = 'Colombo';

fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('temp').textContent = `${data.current.temp_c} °C`;
    document.getElementById('humidity').textContent = `${data.current.humidity} %`;
    document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;
    document.getElementById('uv').textContent = data.current.uv;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

  function getWeather() {
  const city = document.getElementById('cityInput').value || "Colombo";
  const apiKey = 'YOUR_API_KEY';

  document.getElementById('loader').style.display = "block";
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('temp').textContent = `${data.current.temp_c} °C`;
      document.getElementById('humidity').textContent = `${data.current.humidity} %`;
      document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;
      document.getElementById('uv').textContent = data.current.uv;
    })
    .catch(error => {
      alert("City not found!");
      console.error(error);
    });
}
document.getElementById('loader').style.display = "none";

document.getElementById('weatherIcon').src = data.current.condition.icon;

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

window.onload = getWeather;

