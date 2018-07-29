import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';

const Location = ({city}) => {
    return (
        <div>
            <h1>{city}</h1>
        </div>
    );

};

Location.propsTypes = {
    Location: PropTypes.string.isRequired,
}
    


export default Location;

