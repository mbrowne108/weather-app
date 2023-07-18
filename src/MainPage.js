import React from 'react'

export default function ({ weatherData }) {
  const date = new Date();
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return (
    <div>
      <div>
        <h3 className='city-name'>{weatherData.name}</h3>
        {weatherData.main ? <h5 className='date'>{date.toLocaleString('en-US', dateOptions)}</h5> : null}
        {weatherData.main ? <h2 className='temp'>{weatherData.main.temp.toFixed()}°F</h2> : null}
        {weatherData.weather ? <h4 className='description'>{weatherData.weather[0].main}</h4> : null}
      </div>
      <div className='details'>
        <div>
          <p>Feels Like</p>
          {weatherData.main ? <h2>{weatherData.main.feels_like.toFixed()}°F</h2> : null}
        </div>
        <div>
          <p>Humidity</p>
          {weatherData.main ? <h2>{weatherData.main.humidity}%</h2> : null}
        </div>
        <div>
          <p>High</p>
          {weatherData.main ? <h2>{weatherData.main.temp_max.toFixed()}°F</h2> : null}
        </div>
        <div>
          <p>Low</p>
          {weatherData.main ? <h2>{weatherData.main.temp_min.toFixed()}°F</h2> : null}
        </div>
      </div>
    </div>
  )
}
