import React from 'react';
import PropTypes  from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';


const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{ `${humidity} % - ` }</span>
        <span>{ `${wind} wind` }</span>
    </div>
)

WeatherExtraInfo.propsType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;