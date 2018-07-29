import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
        CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY 
    } from '../constanst/weather';

const stateToIconName = weatherState => {
    switch(weatherState){
        case CLOUD:
            return 'cloud';
        case CLOUDY:
            return 'cloudy';
        case SUN:
            return 'day-sunny';
        case RAIN:
            return 'rain';
        case SNOW:
            return 'snow';
        case WINDY:
            return 'windy';
        default:
            return 'day-sunny';
    }
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
    <WeatherIcons name={stateToIconName(weatherState)} size="2x" />
        <span>{`${temperature}º C`}</span>
    </div>
);

export default WeatherTemperature;