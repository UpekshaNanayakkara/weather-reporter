console.log("Script loaded successfully!");


const apiKey = '6c81856ff0054ebbae275251252406';

// Load default Colombo weather
function loadColomboWeather() {
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Colombo`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('temp').textContent = `${data.current.temp_c} °C`;
      document.getElementById('humidity').textContent = `${data.current.humidity} %`;
      document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;
      document.getElementById('uv').textContent = data.current.uv;
      document.getElementById('weatherIcon').src = data.current.condition.icon;
      document.getElementById('weatherIcon').alt = data.current.condition.text;
      document.getElementById('colomboDescription').textContent = data.current.condition.text;
    })
    .catch(error => {
      console.error("Error loading Colombo weather:", error);
    });
}

// Load weather for user-entered city
function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) return;

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      document.getElementById('searchTemp').textContent = `${data.current.temp_c} °C`;
      document.getElementById('searchHumidity').textContent = `${data.current.humidity} %`;
      document.getElementById('searchWind').textContent = `${data.current.wind_kph} km/h`;
      document.getElementById('searchUv').textContent = data.current.uv;
      document.getElementById('searchIcon').src = data.current.condition.icon;
      document.getElementById('searchIcon').alt = data.current.condition.text;
      document.getElementById('searchDescription').textContent = data.current.condition.text;
      // Update Date and Time
      updateDateTime();
    })
    .catch(error => {
      alert("City not found!");
      console.error("Error fetching city weather:", error);
    });
  }

    function updateDateTime() {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      document.getElementById('currentDateTime').textContent = `${date} ${time}`;
    }

// Call updateDateTime every second
setInterval(updateDateTime, 1000);


// Load default weather on page load
window.onload = loadColomboWeather;
