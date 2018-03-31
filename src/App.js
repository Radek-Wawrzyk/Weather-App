import React, { Component } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";

const apiKey = "11c38b071f2eeb832c531f427ef6b289";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`);
    const data = await apiCall.json();
    console.log("In "+city+" city tempeture is "+data.main.temp+"°C");

    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      error: ""
    })
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Form getWeather={this.getWeather}></Form>
      </div>
    );
  }
}

export default App;