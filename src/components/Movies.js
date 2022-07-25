import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Movies extends Component {

    render(){
        return(
            <Container fluid='md'>
                <h3>Movies</h3>    
                <Row xs={1} md={2} lg={3}>
                    {this.props.movies.map(obj =>
                        <Col key={obj.original_title} lg={6}>
                            <Card>
                                <Card.Header>{obj.original_title}</Card.Header>
                                <Card.Img alt ={obj.original_title} src={obj.poster_path} className= 'image' width='30px'/>
                                <Card.Body>
                                    <h5>Description</h5>
                                    <Card.Text>{obj.overview}</Card.Text>
                                    <Card.Text>Date Released: {obj.release_date}</Card.Text>
                                        <Row lg={3}>
                                            <Card.Text>Rating: {obj.popularity}</Card.Text>
                                            <Card.Text>Vote Avg: {obj.vote_average}</Card.Text>
                                            <Card.Text>Votes: {obj.vote_count}</Card.Text>        
                                        </Row>
                                </Card.Body>
                            </Card>  
                        </Col>        
                    )}
                </Row>
            </Container>
        )
    }
}





export default Movies;