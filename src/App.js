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
  const [bkgimg, setBkgimg] = useState('clear')

  const searchCity = () => {
    fetch(`${api.base}/weather?q=${city}&units=imperial&appid=${api.key}`)
    .then(r => r.json())
    .then(data => {
      setWeatherData(data)
      setCity('')
      setBackground(data)
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
          setBackground(data)
          console.log(data)
    })
      })
    }
  }

  const setBackground = (data) => {
    if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
      setBkgimg('thunderstorm')
    } else if (data.weather[0].id >= 300 && data.weather[0].id < 600) {
      setBkgimg('rain')
    } else if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
      setBkgimg('snow')
    } else if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
      setBkgimg('fog')
    } else if (data.weather[0].id === 800) {
      setBkgimg('clear')
    } else if (data.weather[0].id >= 800 && data.weather[0].id < 810) {
      setBkgimg('cloudy')
    } else {
      setBkgimg('clear')
    }
  }

  return (
    <div className={`app ${bkgimg}`}>
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
