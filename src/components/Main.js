import {Component} from 'react';
import Search from './Search';
import Display from './Display';

import { Container } from 'react-bootstrap';
import axios from 'axios';

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            cityName: '',
            latitude: '',
            longitude: '',
        }

    }

    getLocationData = (query) => {
        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${query}&format=json`;
        axios.get(url).then(response => {
          console.log(response.data);

          let data = response.data[0];
          console.log(data.display_name, data.lat, data.lon);

          this.setState({cityName: data.display_name, 
            latitude: data.lat, 
            longitude: data.lon});
        })
    }
    
    render(){
        return(
            <Container>
                <Search getLocationData = {this.getLocationData} />
                <Display cityName = {this.state.cityName} lat = {this.state.latitude} lon = {this.state.longitutde}/>
            </Container>
        )
    }
}

export default Main;