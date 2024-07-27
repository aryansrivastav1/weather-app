const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3026cd15c7mshd3981dfee4bdbb8p1ffc86jsnb82b3139a881',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

const getWeather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New%20York', options)
        .then(response => response.json())
        .then((response) => {
            york_cloud_pct.innerHTML = response.cloud_pct
            york_temp.innerHTML = response.temp
            york_feels_like.innerHTML = response.feels_like
            york_humidity.innerHTML = response.humidity
            york_min_temp.innerHTML = response.min_temp
            york_max_temp.innerHTML = response.max_temp
            york_wind_speed.innerHTML = response.wind_speed
            york_wind_degrees.innerHTML = response.wind_degrees
            console.log(response);
        })

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            delhi_cloud_pct.innerHTML = response.cloud_pct
            delhi_temp.innerHTML = response.temp
            delhi_feels_like.innerHTML = response.feels_like
            delhi_humidity.innerHTML = response.humidity
            delhi_min_temp.innerHTML = response.min_temp
            delhi_max_temp.innerHTML = response.max_temp
            delhi_wind_speed.innerHTML = response.wind_speed
            delhi_wind_degrees.innerHTML = response.wind_degrees
            console.log(response);
        })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
        .then(response => response.json())
        .then((response) => {
            tokyo_cloud_pct.innerHTML = response.cloud_pct
            tokyo_temp.innerHTML = response.temp
            tokyo_feels_like.innerHTML = response.feels_like
            tokyo_humidity.innerHTML = response.humidity
            tokyo_min_temp.innerHTML = response.min_temp
            tokyo_max_temp.innerHTML = response.max_temp
            tokyo_wind_speed.innerHTML = response.wind_speed
            tokyo_wind_degrees.innerHTML = response.wind_degrees
            console.log(response);
        })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
        .then(response => response.json())
        .then((response) => {
            london_pct.innerHTML = response.cloud_pct
            london_temp.innerHTML = response.temp
            london_feels.innerHTML = response.feels_like
            london_humid.innerHTML = response.humidity
            london_min.innerHTML = response.min_temp
            london_max.innerHTML = response.max_temp
            console.log(response);
        })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
        .then(response => response.json())
        .then((response) => {
            hyder_pct.innerHTML = response.cloud_pct
            hyder_temp.innerHTML = response.temp
            hyder_feels.innerHTML = response.feels_like
            hyder_humid.innerHTML = response.humidity
            hyder_min.innerHTML = response.min_temp
            hyder_max.innerHTML = response.max_temp
            console.log(response);
        })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then((response) => {
            chennai_pct.innerHTML = response.cloud_pct
            chennai_temp.innerHTML = response.temp
            chennai_feels.innerHTML = response.feels_like
            chennai_humid.innerHTML = response.humidity
            chennai_min.innerHTML = response.min_temp
            chennai_max.innerHTML = response.max_temp
            console.log(response);
        })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
        .then(response => response.json())
        .then((response) => {
            seattle_pct.innerHTML = response.cloud_pct
            seattle_temp.innerHTML = response.temp
            seattle_feels.innerHTML = response.feels_like
            seattle_humid.innerHTML = response.humidity
            seattle_min.innerHTML = response.min_temp
            seattle_max.innerHTML = response.max_temp
            console.log(response);
        })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
        .then(response => response.json())
        .then((response) => {
            kolkata_pct.innerHTML = response.cloud_pct
            kolkata_temp.innerHTML = response.temp
            kolkata_feels.innerHTML = response.feels_like
            kolkata_humid.innerHTML = response.humidity
            kolkata_min.innerHTML = response.min_temp
            kolkata_max.innerHTML = response.max_temp
            console.log(response);
        })

        .catch(err => console.error(err))
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);

getWeather("New Delhi");
