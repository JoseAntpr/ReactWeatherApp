import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import './styles.css';
import transformWeather from '../../services/transformWeather';
import { SUN } from '../../constanst/weather';


const location = 'Malaga,es'
const api_key = 'bd6cf09e7dc29a422c7742b1e753f1d8';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component{

    state = {
        city: 'Málaga',
        data: null
    };

    componentWillMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        // this.setState({data: data2});
        fetch(api_weather)
            .then(res => res.json())
            .then( weahterData => {
                const data = transformWeather(weahterData);
                this.setState({ data });
            });
    }
    render() {
        return(
            <div className='weatherLocationCont'>
                <Location city={this.state.city} />
                { this.state.data ? <WeatherData data={this.state.data}/> : 'Cargando...'}
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;