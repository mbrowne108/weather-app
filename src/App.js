import { useState } from 'react';
import './App.css';
import MainPage from './MainPage';

const api = {
  key: `${process.env.REACT_APP_WEATHER_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [city, setCity] = useState('')
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
    console.log('Coords')
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
      </div>
      <div>
        <button className='coords-button' onClick={searchCoords}>Use my Location</button>
      </div>
      <MainPage weatherData={weatherData} />
      {/* <DetailsPage weatherData={weatherData} /> */}
    </div>
  );
}

export default App;
