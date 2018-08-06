import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';

import './styles.css';
import transformWeather from '../../services/transformWeather';

const url = 'http://api.openweathermap.org/data/2.5/weather'
const api_key = 'bd6cf09e7dc29a422c7742b1e753f1d8';

class WeatherLocation extends Component{

    constructor({ city }){
        super();
        this.state = {
            city,
            data: null
        };
    }

    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
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
                { this.state.data ? <WeatherData data={this.state.data}/> : <CircularProgress/> }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
}


export default WeatherLocation;