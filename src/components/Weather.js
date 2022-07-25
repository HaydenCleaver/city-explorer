import {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay';

class Weather extends Component{

    render(){

        return(
            <ListGroup horizontal className ="text-white bg-dark">
                    <h3>Weather Forecast:</h3>
                    {this.props.weather.map(obj =>
                        <WeatherDay key={obj.date}
                            date = {obj.date}
                            description = {obj.description}
                        />
                    )}
            </ListGroup>)
    }
}

export default Weather;
            