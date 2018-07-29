import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather App (Aplicación del clima)
        <WeatherLocation />
      </div>
    );
  }
}

export default App;
