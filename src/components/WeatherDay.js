import {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class WeatherDay extends Component {

    render(){
        return(
           
            <ListGroup.Item>
                <p>Date: {this.props.date}</p>
                <p>{this.props.description}</p>
            </ListGroup.Item>
              
        )
    }
}

export default WeatherDay;