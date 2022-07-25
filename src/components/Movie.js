import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Movie extends Component{

    render(){
        return(
            <Col lg={6}>
                <Card>
                    <Card.Header>{this.props.original_title}</Card.Header>
                    <Card.Img alt ={this.props.original_title} src={this.props.poster_path} className= 'image' width='30px'/>
                    <Card.Body>
                        <h5>Description</h5>
                        <Card.Text>{this.props.overview}</Card.Text>
                        <Card.Text>Date Released: {this.props.release_date}</Card.Text>
                        <Row lg={3}>
                            <Card.Text>Rating: {this.props.popularity}</Card.Text>
                            <Card.Text>Vote Avg: {this.props.vote_average}</Card.Text>
                            <Card.Text>Votes: {this.props.vote_count}</Card.Text>        
                        </Row>
                    </Card.Body>
                </Card>  
            </Col>   
        )
    }
}

export default Movie;