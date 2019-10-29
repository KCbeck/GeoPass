import React from 'react';
// import logo from '.logo.svg';
import'./App.css';
import Weather from './weather_app_component/weather.component.jsx';
import 'weather-icons/css/weather-icons.min.css';



const API_key="c2d1b8e373091c00cb4678cdb669db47";

class WeatherApp extends React.Component {
    constructor(){
      super();
      this.state= {};
      }
      render() 
      {
        return (
            <div className="App">
            <h1>Weather App</h1>
            <Weather/>
        </div>
        );
    }
}
export default WeatherApp;
