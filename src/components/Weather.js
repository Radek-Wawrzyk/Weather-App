import React, { Component } from 'react';
import "../styles/weather.css";

class Weather extends Component { 
  render() {
    let component;
    if (this.props.city) {
      component = (
        <section className="weather" id="weather">
          <div className="weather-tile">
            <h2 className="weather-location">{this.props.city} , {this.props.country}</h2>
          </div>
          <div className="weather-tile">
            <h3 className="weather-temperature">{this.props.temperature}°C</h3>
          </div>
          <div className="weather-tile">
            <h4>{this.props.mainTypeOfWeather}</h4> 
          </div>
          <div className="weather-tile weather-tile-properties">
            <p className="weather-property">Feels like <span>{this.props.description}</span></p>
            <p className="weather-property">Wind speed <span>{this.props.wind} Mph</span></p> 
            <p className="weather-property">Humidity  <span>{this.props.humidity}%</span></p>
            <p className="weather-property">Pressure <span>{this.props.pressure} hPa</span></p>
            <p className="weather-property">Visibility  <span>{this.props.visibility}</span></p>
            <p className="weather-property">Cloudy  <span>{this.props.cloudy }%</span></p>
          </div>
        </section> 
      )
    } else {
      component = (
        <section className="weather" id="weather">
          <div className="weather-tile weather-tile-error">
            <p><span className="error">{this.props.error}</span></p>
          </div> 
        </section>
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


      