import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Display extends Component{

    render(){
        return(
            <Card style = {{alignContent: 'center', width : "50%", marginTop:'5px'} }>
                <Card.Img variant='top' src={this.props.mapImage}/>
                <Card.Header className ="text-white bg-dark">{this.props.cityName}</Card.Header>
                <ListGroup variant = 'flush'>
                    <ListGroupItem>Latitude: {this.props.lat}</ListGroupItem>
                    <ListGroupItem>Longitude: {this.props.lon}</ListGroupItem>
                </ListGroup>
                <ListGroup horizontal className ="text-white bg-dark">
                    <h3>Weather Forecast:</h3>
                    {this.props.weather.map(obj =>
                        <ListGroup.Item >
                            <p>Date: {obj.date}</p>
                            <p>{obj.description}</p>
                        </ListGroup.Item>
                        )}
                </ListGroup>
            </Card>
        )
    }
}

export default Display;