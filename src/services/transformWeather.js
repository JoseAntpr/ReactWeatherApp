import convert from 'convert-units';
import { SUN } from '../constanst/weather';


const getWeatherState = weather => {
    return SUN;
}

const getTemp = kelvin =>  {
    return convert(kelvin).from('K').to('C').toFixed(2);
}

const transformWeather = ( weahterData ) => {
    const { humidity, temp } = weahterData.main;
    const { speed } = weahterData.wind;
    const weatherState = getWeatherState(this.weather);
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