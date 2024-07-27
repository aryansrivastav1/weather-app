// Configuration for API requests
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dfd5b85a93msh04f79e594c10a3ep13f32bjsnf2c24bef0a37',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
};

// Function to format UNIX timestamps to human-readable time
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

// Fetch and display weather data for a given city
const getWeather = (city) => {
    const cities = [
        'New York',
        city, // This will be dynamically set by the user input
        'Tokyo',
        'London',
        'Hyderabad',
        'Chennai',
        'Seattle',
        'Kolkata',
    ];

    cities.forEach((cityName) => {
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${encodeURIComponent(cityName)}`, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((response) => {
                // Log full response for debugging
                console.log(`Weather data for ${cityName}:`, response);

                // Check for valid data before updating the DOM
                if (response && response.temp !== undefined) {
                    updateWeatherDOM(cityName, response);
                } else {
                    console.error(`No data available for ${cityName}`);
                }
            })
            .catch((err) => console.error(`Error fetching weather data for ${cityName}:`, err));
    });
};

// Update the DOM with the fetched weather data
const updateWeatherDOM = (cityName, data) => {
    // Use a mapping between city names and DOM element IDs or variables
    const cityElementMapping = {
        'New York': {
            cloud_pct: york_cloud_pct,
            temp: york_temp,
            feels_like: york_feels_like,
            humidity: york_humidity,
            min_temp: york_min_temp,
            max_temp: york_max_temp,
            wind_speed: york_wind_speed,
            wind_degrees: york_wind_degrees,
        },
        'New Delhi': {
            cloud_pct: delhi_cloud_pct,
            temp: delhi_temp,
            feels_like: delhi_feels_like,
            humidity: delhi_humidity,
            min_temp: delhi_min_temp,
            max_temp: delhi_max_temp,
            wind_speed: delhi_wind_speed,
            wind_degrees: delhi_wind_degrees,
        },
        Tokyo: {
            cloud_pct: tokyo_cloud_pct,
            temp: tokyo_temp,
            feels_like: tokyo_feels_like,
            humidity: tokyo_humidity,
            min_temp: tokyo_min_temp,
            max_temp: tokyo_max_temp,
            wind_speed: tokyo_wind_speed,
            wind_degrees: tokyo_wind_degrees,
        },
        London: {
            cloud_pct: london_pct,
            temp: london_temp,
            feels_like: london_feels,
            humidity: london_humid,
            min_temp: london_min,
            max_temp: london_max,
        },
        Hyderabad: {
            cloud_pct: hyder_pct,
            temp: hyder_temp,
            feels_like: hyder_feels,
            humidity: hyder_humid,
            min_temp: hyder_min,
            max_temp: hyder_max,
        },
        Chennai: {
            cloud_pct: chennai_pct,
            temp: chennai_temp,
            feels_like: chennai_feels,
            humidity: chennai_humid,
            min_temp: chennai_min,
            max_temp: chennai_max,
        },
        Seattle: {
            cloud_pct: seattle_pct,
            temp: seattle_temp,
            feels_like: seattle_feels,
            humidity: seattle_humid,
            min_temp: seattle_min,
            max_temp: seattle_max,
        },
        Kolkata: {
            cloud_pct: kolkata_pct,
            temp: kolkata_temp,
            feels_like: kolkata_feels,
            humidity: kolkata_humid,
            min_temp: kolkata_min,
            max_temp: kolkata_max,
        },
    };

    const elements = cityElementMapping[cityName];

    if (elements) {
        elements.cloud_pct.innerHTML = data.cloud_pct;
        elements.temp.innerHTML = data.temp;
        elements.feels_like.innerHTML = data.feels_like;
        elements.humidity.innerHTML = data.humidity;
        elements.min_temp.innerHTML = data.min_temp;
        elements.max_temp.innerHTML = data.max_temp;
        elements.wind_speed.innerHTML = data.wind_speed;
        elements.wind_degrees.innerHTML = data.wind_degrees;
    } else {
        console.error(`DOM elements not found for city: ${cityName}`);
    }
};

// Add event listener to the submit button for fetching weather data
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const cityInput = city.value.trim(); // Get and trim the user input
    if (cityInput) {
        cityName.innerHTML = cityInput; // Update displayed city name
        getWeather(cityInput);
    } else {
        console.error('City input is empty');
    }
});

// Initial call to fetch weather data for New Delhi
getWeather('New Delhi');
