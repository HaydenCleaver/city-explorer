import {Component} from 'react';
import Search from './Search';
import Display from './Display';
import axios from 'axios';

import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            cityName: '',
            latitude: '',
            longitude: '',
            map: '',
            weather: [],
            errorData: {},
            alertStatus: false,
        }

    }

    getLocationData = (query) => {
        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${query}&format=json`;
        axios.get(url).then(response => {
          console.log(response.data);

          let data = response.data[0];
          console.log(data.display_name, data.lat, data.lon);

          this.setState({
            cityName: data.display_name.split(',')[0], 
            latitude: data.lat, 
            longitude: data.lon,
            map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${data.lat},${data.lon}&zoom=12.2
            `,
            }, this.getWeather);
        })
        .catch((error) => {
            if (error.response){
                let message = `${error.response.data.error}. ${error.message} ${error.code}.`;
                this.setState({alertStatus: true, errorData: message})
            }
        })
    }
    
    getWeather = async () => {
        console.log(this.state.latitude, this.state.longitude, this.state.cityName);
        let url = `https://scintillating-city-explorer.herokuapp.com/weather?city_name=${this.state.cityName}&lat=${this.state.latitude}&lon=${this.state.longitude}`;

        try {
            let response = await axios.get(url);
            this.setState({
                weather: response.data,
            });
            console.log(this.state.weather);
        } catch (error) {
            let message = `${error.response.data.error}. ${error.message} ${error.code}.`;
            this.setState({alertStatus: true, errorData: message})
        }
    }

    render(){
        return(
            <Container style = {{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", backgroundColor:"grey"}}>
                <Search getLocationData = {this.getLocationData}/>
                <Alert show = {this.state.alertStatus} variant = 'danger' onClose={()=> this.setState({showAlert: false})} dismissible>
                    <Alert.Heading>
                        Error!
                    </Alert.Heading>
                    {this.state.errorData}
                </Alert>
                <Display 
                cityName = {this.state.cityName} 
                lat = {this.state.latitude} 
                lon = {this.state.longitude}
                mapImage = {this.state.map}
                weather = {this.state.weather}
                />
            </Container>
        )
    }
}

export default Main;