import React, { Component } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";

const apiKey = "11c38b071f2eeb832c531f427ef6b289";
const city = "Gdynia";

class App extends Component {
  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`);
    const data = await apiCall.json();
    console.log(data);
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