import React from 'react';

import WeatherLocation from '../WeatherLocation/index';
import { PropTypes } from 'prop-types';

import './styles.css';


const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    }
    
    const stringToComponent = cities => (
        cities.map( (city) => (
             <WeatherLocation 
                key={city} 
                city={city} 
                onWeatherLocationClick={ () => handleWeatherLocationClick(city)}
            />
        ))
    );

    return (
        <div className='location-list'>
            {stringToComponent(cities)}
        </div>
    )

}


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;