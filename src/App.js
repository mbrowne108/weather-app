import { useState } from 'react';
import './App.css';
import MainPage from './MainPage';

const api = {
  key: `${process.env.REACT_APP_WEATHER_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [city, setCity] = useState('')
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [weatherData, setWeatherData] = useState([])

  const searchCity = () => {
    fetch(`${api.base}/weather?q=${city}&units=imperial&appid=${api.key}`)
    .then(r => r.json())
    .then(data => {
      setWeatherData(data)
      setCity('')
      console.log(data)
    })
  }

  const searchCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetch(`${api.base}/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=imperial&appid=${api.key}`)
        .then(r => r.json())
        .then(data => {
          setWeatherData(data)
          setCity('')
          console.log(data)
    })
      })
    }
  }

  return (
    <div className="app">
      <div className='search-container'>
        <input
          type='text'
          className='searchbar'
          placeholder='Search city...'
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button className='search-button' onClick={searchCity}>Search</button>
        <div>
          <button className='coords-button' onClick={searchCoords}>Use my Location</button>
        </div>
      </div>
      <MainPage weatherData={weatherData} />
      {/* <DetailsPage weatherData={weatherData} /> */}
    </div>
  );
}

export default App;
