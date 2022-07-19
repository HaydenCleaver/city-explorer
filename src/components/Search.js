import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Search extends Component{

    constructor(props){
        super(props);

        this.state ={
            query: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getLocationData(this.state.query);
      }
      
      handleSearch = (e) => {
        this.setState({query: e.target.value})
        console.log(this.state.query);
      }

    render(){
        return(
            <Container>
            <Form onSubmit = {this.handleSubmit}>
              <Form.Label>Enter City Name</Form.Label>
              <Form.Control type = 'text' onChange = {this.handleSearch}/>
              <Button type = 'submit'>Explore!</Button>
            </Form>
          </Container>
        )
    }
}

export default Search;