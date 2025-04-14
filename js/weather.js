async function getWeather(city) {
    const apiKey = 'e336b443d3414d17b2f184720251404'; // Reemplaza con tu clave de API de Weatherstack
    const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;
  
    try {
      const response = await fetch(weatherUrl)
      const weather  = await response.json()
      currentWeather(weather)
      forescastWeather(weather)
    } catch (error){
        throw error
    }
  
  }
  
  function currentWeather({current, location}) {
    const currentWeather = document.getElementById('currentWeather');
    const {name, country} = location
    const {condition: {text, icon}, temp_c, humidity, wind_kph, precip_in} = current 
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
    `
    currentWeather.innerHTML = currentTemplate;
  }
  
  function forescastWeather({forecast}) {
    const forecastWeather = document.getElementById('forecastWeather');
    const forecastDay = forecast.forecastday[0].hour
    forecastDay.forEach(day => {
      const {condition: {text, icon}, time, temp_c} = day
      const timeFormat = time.split(" ")[1]
      forecastTemplate = `
      <li class="forecast-grades">
        <span>${timeFormat}<span>
        <img class="weather-icon" src="http:${icon}" alt="${text}">
        <p>${temp_c} °C</p>
      </li>
      `
      forecastWeather.innerHTML += forecastTemplate
    })
  
    }
  
  
  getWeather('Bilbao')