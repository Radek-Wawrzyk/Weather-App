import React, { Component } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from './components/Weather';
import Footer from './components/Footer';
import "./styles/app.css";

const apiKey = "11c38b071f2eeb832c531f427ef6b289";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    mainTypeOfWeather: "",
    description: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    visibility: undefined,
    cloudy: undefined,
    error: undefined,
    language: "en"
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
        mainTypeOfWeather: data.weather[0].main,
        description: data.weather[0].description,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        visibility: data.visibility,
        cloudy: data.clouds.all,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        wind: undefined,
        humidity: undefined,
        pressure: undefined,
        visibility: undefined,
        cloudy: undefined,
        error: "Enter city!"
      })
    }
  };
  
  setLanguage = (e) => {
    this.setState({language: e.target.value});
  };

  elo = () => {
    alert("currect language is "+this.state.language);
  }

  render() {
    return (
      <div className="weather-apliaction">
        <Header language={this.state.language} setLanguage={this.setLanguage} elo={this.elo} ></Header>
        <main className="weather-info-wrapper" style={{backgroundImage: `url(..//img/${this.state.mainTypeOfWeather}.jpg)`}}>
          <section className="weather-info-content">
            <Form getWeather={this.getWeather}></Form>
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              wind={this.state.wind}
              error={this.state.error}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              visibility={this.state.visibility}
              cloudy={this.state.cloudy}
              mainTypeOfWeather={this.state.mainTypeOfWeather}
            ></Weather>
          </section>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;