import React from 'react'

export default function ({ weatherData }) {
  return (
    <div>
      <h3 className='city-name'>{weatherData.name}</h3>
      {weatherData.main ? <h2 className='temp'>{weatherData.main.temp} °F</h2> : null}
      {weatherData.weather ? <h4 className='temp'>{weatherData.weather[0].description}</h4> : null}
    </div>
  )
}
