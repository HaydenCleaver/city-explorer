import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';

class Movies extends Component {

    render(){
        return(
            <Container fluid='md'>
                <h3>Movies</h3>    
                <Row xs={1} md={2} lg={3}>
                    {this.props.movies.map(obj =>
                        <Movie key = {obj.original_title}
                            original_title = {obj.original_title}
                            overview = {obj.overview}
                            poster_path = {obj.poster_path}
                            release_date = {obj.release_date}
                            popularity = {obj.popularity}
                            vote_average = {obj.vote_average}
                            vote_count = {obj.vote_count}
                        />
                    )}
                </Row>
            </Container>
        )
    }
}

export default Movies;