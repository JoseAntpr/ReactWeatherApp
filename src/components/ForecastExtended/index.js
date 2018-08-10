import React, { Component } from 'react';

import { PropTypes } from 'prop-types';
import ForecastItem from '../ForecastItem/index';
import './styles.css';
import transformForecast from '../../services/transformForecast';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'sun',
    wind: '10 m/s'
}
const api_key = 'bd6cf09e7dc29a422c7742b1e753f1d8';
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        // fetch o axios
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.city !== this.props.city ) {
            this.setState( {forecastData: null});
            this.updateCity(nextProps.city );
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch( url_forecast )
            .then( data => (data.json() ))
            .then( forecast => {
                const forecastData = transformForecast(forecast);
                this.setState({ forecastData: forecastData});
            });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => {
            return <ForecastItem 
                        key={`${forecast.weekDay}${forecast.hour}`} 
                        weekDay={forecast.weekDay} 
                        hour={forecast.hour} 
                        data={forecast.data}>
                    </ForecastItem>
        });

    }
    renderProgress = () => {
        return <h3>Cargando pronóstico extendido...</h3>;
    }


    render(){
        const { city } = this.props;
        const { forecastData } = this.state; 
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                { forecastData ?
                        this.renderForecastItemDays(forecastData)
                    :   this.renderProgress() 
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;
