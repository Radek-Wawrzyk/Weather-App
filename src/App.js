import React, { Component } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from './components/Weather';

const apiKey = "11c38b071f2eeb832c531f427ef6b289";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`);
    const data = await apiCall.json();

    if (city) {
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        wind: undefined,
        error: "Enter city!"
      })
    }
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Form getWeather={this.getWeather}></Form>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          wind={this.state.wind}
          error={this.state.error}
        ></Weather>
      </div>
    );
  }
}

export default App;