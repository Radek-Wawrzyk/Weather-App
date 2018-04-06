import React, { Component } from 'react';
import "../styles/weather.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Weather extends Component { 
  render() {
    let component;
    if (this.props.city) {
      component = (
        <section className="weather" id="weather">
          <ReactCSSTransitionGroup
            transitionName="show"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >
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
              <p className="weather-property">{this.props.language.weather.description}  <span>{this.props.description}</span></p>
              <p className="weather-property">{this.props.language.weather.windSpeed}  <span>{this.props.wind} Mph</span></p> 
              <p className="weather-property">{this.props.language.weather.humidity}  <span>{this.props.humidity}%</span></p>
              <p className="weather-property">{this.props.language.weather.pressure}  <span>{this.props.pressure} hPa</span></p>
              <p className="weather-property">{this.props.language.weather.visibility}  <span>{this.props.visibility}</span></p>
              <p className="weather-property">{this.props.language.weather.cloudy}  <span>{this.props.cloudy }%</span></p>
            </div>
          </ReactCSSTransitionGroup>
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


      