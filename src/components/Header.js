import React, { Component } from 'react';
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <header className="weather-header">
        <h1 className="weather-header-title">Weather<span>App</span></h1>
        <div className="weather-header-language">
          <p>Select language</p>
          <select className="weather-header-language-select">
            <option>En</option>
            <option>Pl</option>
          </select>
        </div>
      </header>
    );
  }
}

export default Header;
