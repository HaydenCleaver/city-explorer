import {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends Component{

    render(){

        return(
            <ListGroup horizontal className ="text-white bg-dark">
                    <h3>Weather Forecast:</h3>
                    {this.props.weather.map(obj =>
                        <ListGroup.Item key={obj.date}>
                            <p>Date: {obj.date}</p>
                            <p>{obj.description}</p>
                        </ListGroup.Item>
                    )}
            </ListGroup>)
    }
}

export default Weather;
            