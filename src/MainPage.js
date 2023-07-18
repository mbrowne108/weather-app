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
      <h3 className='city-name'>{weatherData.name}</h3>
      <h5 className='date'>{date.toLocaleString('en-US', dateOptions)}</h5>
      {weatherData.main ? <h2 className='temp'>{weatherData.main.temp}°F</h2> : null}
      {weatherData.weather ? <h4 className='description'>{weatherData.weather[0].main}</h4> : null}
    </div>
  )
}
