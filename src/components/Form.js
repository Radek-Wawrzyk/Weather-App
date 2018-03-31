import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Country"/>
        <button onClick={this.props.getWeather}>Get Weather</button>
      </form>
    );
  }
}

export default Form;
