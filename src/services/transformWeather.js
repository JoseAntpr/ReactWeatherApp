import convert from 'convert-units';
import { 
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
 } from '../constanst/weather';


const getWeatherState = weather => {
    const { id } = weather[0];
    if( id < 300 ) {
        return THUNDER;
    }else if (id < 400 ) {
        return DRIZZLE;
    }else if ( id < 600 ) {
        return RAIN;
    }else if( id < 700 ) {
        return SNOW;
    }else if ( id === 800) {
        return SUN
    }else{
        return CLOUDY;
    }
}

const getTemp = kelvin =>  {
    return convert(kelvin).from('K').to('C').toFixed(2);
}

const transformWeather = ( weahterData ) => {
    const { weather } = weahterData;
    const { humidity, temp } = weahterData.main;
    const { speed } = weahterData.wind;
    const weatherState = getWeatherState(weather);
    const temperature = +getTemp(temp); 

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;