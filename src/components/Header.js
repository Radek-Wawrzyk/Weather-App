import React, { Component } from 'react';
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <header className="weather-header">
        <h1 className="weather-header-title">Weather<span>App</span></h1>
        <div className="weather-header-language">
          <p>{this.props.language.header}</p>
          <select className="weather-header-language-select" value={this.props.languageVersion} onChange={this.props.setLanguage} onMouseEnter={this.props.elo} name="select">
            <option value="pl">Pl</option>
            <option value="en">En</option>
          </select>
        </div>
      </header>
    );
  }
}

export default Header;
