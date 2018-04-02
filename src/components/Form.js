import React, { Component } from 'react';
import "../styles/form.css";

class Form extends Component {
  render() {
    return (
      <form className="weather-form" onSubmit={this.props.getWeather} >
        <input className="weather-form-input" type="text" name="city" placeholder="City" />
        <button className="weather-form-button">Get Weather</button>
      </form>
    );
  }
}

export default Form;
