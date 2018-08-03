import React from 'react';
import PropTypes  from 'prop-types';
import './styles.css';


const WeatherExtraInfo = ({humidity, wind}) => (
    <div className='weatherExtaInfoCont'>
        <span>{ `${humidity} % - ` }</span>
        <span>{ `${wind} wind` }</span>
    </div>
)

WeatherExtraInfo.propsType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;