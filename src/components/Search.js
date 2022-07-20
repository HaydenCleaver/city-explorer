import {Component} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        this.props.getWeather();
      }
      
      handleSearch = (e) => {
        this.setState({query: e.target.value})
        console.log(this.state.query);
      }

    render(){
        return(
            <Form onSubmit = {this.handleSubmit} style = {{width: "50%"}}>
                <Row>
                    <Col sm={3} style={{textAlign: 'right'}}>
                        <Form.Label style = {{fontSize: '110%', fontWeight: 'bold'}}>Enter City Name:</Form.Label>
                    </Col>
                    <Col>
                    <Form.Control type = 'text' onChange = {this.handleSearch} style ={{marginBottom: "5px"}}/>
                    </Col>
                </Row>
              <Button type = 'submit'>Explore!</Button>
            </Form>
        )
    }
}

export default Search;