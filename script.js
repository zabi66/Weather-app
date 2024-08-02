
const apiKey = '4245f444183f8a987400f0e75324d2e2';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        document.getElementById('weatherResult').innerText = 'Please enter a city name';
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            console.log(data); // Log the full response data for debugging
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('weatherDescription').innerText = data.weather[0].description;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        } else {
            document.getElementById('weatherResult').innerText = 'City not found';
            console.error(`Error: ${data.message}`);
        }
    } catch (error) {
        document.getElementById('weatherResult').innerText = 'An error occurred. Please try again later.';
        console.error('Fetch error:', error);
    }
}


