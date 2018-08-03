import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => {
    return (
        <div>
            <h1>{city}</h1>
        </div>
    );

};

Location.propsTypes = {
    city: PropTypes.string.isRequired,
}
    


export default Location;
