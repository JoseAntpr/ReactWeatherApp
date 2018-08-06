import React from 'react';
import WeatherLocation from '../WeatherLocation/index';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Malaga,es'} />
        <WeatherLocation city={'Buenos Aires,ar'} />
    </div>
);

export default LocationList;