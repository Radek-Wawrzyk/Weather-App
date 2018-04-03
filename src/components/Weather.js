import React, { Component } from 'react';
import "../styles/weather.css";

class Weather extends Component {
  render() {
    return (
      <section className="weather" id="weather">
        {  this.props.city &&
          <div className="weather-tile">
            <p> City: <span>{this.props.city}</span></p> 
          </div>
        }
        { this.props.country &&
          <div className="weather-tile">
            <p>Country: <span>{this.props.country}</span></p> 
          </div>
        }
        { this.props.temperature &&
          <div className="weather-tile">
            <p>temperature: <span>{this.props.temperature}°C</span></p> 
          </div>
        }
        { this.props.description &&
          <div className="weather-tile">
            <p>Weather: <span>{this.props.description}</span></p>
          </div>
        }
        { this.props.wind &&
          <div className="weather-tile">
            <p> Wind speed: <span>{this.props.wind} Mph</span></p> 
          </div>
        }
        { this.props.humidity && 
          <div className="weather-tile">
            <p>Humidity: <span>{this.props.humidity}%</span></p>
          </div>
        }
        { this.props.error &&
          <div className="weather-tile weather-tile-error">
            <p> <span className="error">{this.props.error}</span></p>
          </div>  
        }
      </section>
    );
  }
}

export default Weather;
