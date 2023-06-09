import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState({});
  const [location, setLocation] = useState('');

  //Personal API Key removed in Github Version
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ADD API KEY HERE`;
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>


      <div className="container">
        <div className="top">
          <div className="location">
            <p id="location">{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
              </div>
              <div className="description">
                {data.weather ? <p id="description">{data.weather[0].main}</p> : null}
              </div>
            </div>

  {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()} °C</p> : null}
            <p className="bold">Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity} %</p> : null}
              <p className="bold">Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()} km/h</p> : null}
            <p className="bold">Wind Speed</p>
          </div>
        </div>
}
      </div>
    </div>
  )
};

export default App;
