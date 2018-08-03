import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY 
} from '../../constanst/weather';
import './styles.css';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 18,
    weatherState: WINDY,
    humidity: 5,
    wind: '19 m/s'
}
class WeatherLocation extends Component{

    state = {
        city: 'Málaga',
        data: data
    };

    handleUpdateClick = () => {
        this.setState({data: data2});
    }
    render() {
        return(
            <div className='weatherLocationCont'>
                <Location city={this.state.city} />
                <WeatherData data={this.state.data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;