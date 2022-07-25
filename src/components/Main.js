import {Component} from 'react';
import Search from './Search';
import Display from './Display';
import axios from 'axios';

import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const herokuUrl = `https://scintillating-city-explorer.herokuapp.com`;

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            cityName: '',
            lat: '',
            lon: '',
            map: '',
            weather: [],
            movies: [],
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
            lat: data.lat, 
            lon: data.lon,
            map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${data.lat},${data.lon}&zoom=12.2
            `
            })
             
            this.getWeather(query, data.lat, data.lon);
            this.getMovies(query);
        })
        .catch((error) => {
            if (error.response){
                let message = `${error.response.data.error}. ${error.message} ${error.code}.`;
                this.setState({alertStatus: true, errorData: message})
            }
        })
    }
    
    getWeather = (cityName, lat, lon) => {
        console.log(this.state.lat, this.state.lon, this.state.cityName);
        let url = `${herokuUrl}/weather?city_name=${cityName}&lat=${lat}&lon=${lon}`;

        axios.get(url).then(res => {
            this.setState({
                weather: res.data,
            });
            console.log(this.state.weather);
        })
            .catch ((error) => {
                let message = `${error.response.data.error}. ${error.message} ${error.code}.`;
                this.setState({alertStatus: true, errorData: message})
        });
    }

    getMovies = (query) =>  {
        let url = `${herokuUrl}/movies?query=${query}`;
        console.log(url);
        axios.get(url).then(res => {
            this.setState({
                movies: res.data,
            });
            console.log(this.state.movies);
        })
            .catch((error) => {
                let message = `${error.response.data.error}. ${error.message} ${error.code}.`;
                this.setState({alertStatus: true, errorData: message})
        });
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
                lat = {this.state.lat} 
                lon = {this.state.lon}
                mapImage = {this.state.map}
                weather = {this.state.weather}
                movies = {this.state.movies}
                />
            </Container>
        )
    }
}

export default Main;