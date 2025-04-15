const apiKey = 'e336b443d3414d17b2f184720251404';

async function fetchWeatherData(city) {
  const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

function displayCurrentWeather({ current, location }) {
  const currentWeatherElement = document.getElementById('currentWeather');
  if (!currentWeatherElement) return;

  const { name, country } = location;
  const { condition: { text, icon }, temp_c, humidity, wind_kph, precip_in } = current;

  const currentTemplate = `
    <h2>${name} / ${country}</h2>
    <p>${text}</p>
    <div class="current-data">
      <div class="current-grades">
        <img class="weather-icon" src="http:${icon}" alt="${text}">
        <div>${temp_c}<img src="./assets/img/celsius.png" alt="grados"></div>
      </div>
      <ul>
        <li>Precipitaciones: ${precip_in}%</li>
        <li>Humedad: ${humidity}%</li>
        <li>Viento: ${wind_kph} Km/h</li>
      </ul>
    </div>
  `;
  currentWeatherElement.innerHTML = currentTemplate;
}

function displayForecastWeather({ forecast }) {
  const forecastWeatherElement = document.getElementById('forecastWeather');
  if (!forecastWeatherElement) return;

  const forecastDay = forecast.forecastday[0].hour;
  let forecastHTML = '';

  forecastDay.forEach(day => {
    const { condition: { text, icon }, time, temp_c } = day;
    const timeFormat = time.split(" ")[1];
    const forecastTemplate = `
      <li class="forecast-grades">
        <span>${timeFormat}<span>
        <img class="weather-icon" src="http:${icon}" alt="${text}">
        <p>${temp_c} °C</p>
      </li>
    `;
    forecastHTML += forecastTemplate;
  });

  forecastWeatherElement.innerHTML = forecastHTML;
}

async function getWeather(city) {
  try {
    const weatherData = await fetchWeatherData(city);
    displayCurrentWeather(weatherData);
    displayForecastWeather(weatherData);
  } catch (error) {
    
    console.error("Failed to get weather:", error);
  }
}


getWeather('Bilbao');