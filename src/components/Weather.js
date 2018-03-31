import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
        { this.props.city && <p>City: {this.props.city}</p> }
        { this.props.country &&<p>Country: {this.props.country}</p> }
        { this.props.temperature &&<p>temperature: {this.props.temperature}</p> }
        { this.props.description &&<p>Weather: {this.props.description}</p> }
        { this.props.wind &&<p>Wind speed:{this.props.wind}</p> }
        { this.props.error && <p> {this.props.error}</p> }
      </div>
    );
  }
}

export default Weather;
