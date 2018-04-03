import React, { Component } from 'react';
import "../styles/weather.css";

class Weather extends Component { 
  render() {
    let component;
    if (this.props.city) {
      component = (
        <section className="weather" id="weather">
          <div className="weather-tile">
            <p> City: <span>{this.props.city}</span></p> 
          </div>
          <div className="weather-tile">
            <p>Country: <span>{this.props.country}</span></p> 
          </div>
          <div className="weather-tile">
            <p>temperature: <span>{this.props.temperature}°C</span></p> 
          </div>
          <div className="weather-tile">
            <p>Weather: <span>{this.props.description}</span></p>
          </div>
          <div className="weather-tile">
            <p> Wind speed: <span>{this.props.wind} Mph</span></p> 
          </div>
          <div className="weather-tile">
            <p>Humidity: <span>{this.props.humidity}%</span></p>
          </div>
          <div className="weather-tile weather-tile-error">
            <p> <span className="error">{this.props.error}</span></p>
          </div>  
        </section> 
      )
    } else {
      component = (
        <p>{this.props.error}</p>
      )
    }
    return (
      <div>
        {component}
      </div>
    );
  }
}

export default Weather;


      