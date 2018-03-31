import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
         <p>City: {this.props.city}</p> 
        <p>Country: {this.props.country}</p>
          <p>temperature: {this.props.temperature}</p>
          <p>description: {this.props.description}</p>
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Weather;
