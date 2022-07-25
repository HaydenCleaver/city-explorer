import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import Weather from './Weather';
import Movies from './Movies';

class Display extends Component{

    render(){
        return(
            <Card style = {{alignContent: 'center', width : "60%", marginTop:'5px'} }>
                <Card.Img variant='top' src={this.props.mapImage}/>
                <Card.Header className ="text-white bg-dark">{this.props.cityName}</Card.Header>
                <ListGroup variant = 'flush'>
                    <ListGroupItem>Latitude: {this.props.lat}</ListGroupItem>
                    <ListGroupItem>Longitude: {this.props.lon}</ListGroupItem>
                </ListGroup>
                <Weather weather={this.props.weather}/>
                <Movies movies={this.props.movies}/>
            </Card>
        )
    }
}

export default Display;