import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Table,Image,Form} from 'react-bootstrap';
import Forms from './components/form'
import WeatherTable from './components/table'


class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      data:'',
      cityName:'',
      key: process.env.REACT_APP_LOCATION_KEY,
      latitude:'',
      longitude:'',
      error : '',
      weather : ''
    }
  }

   handelSubmit = async (e)=>{
    e.preventDefault();
    console.log(e)
    const Url = `https://us1.locationiq.com/v1/search.php?key=${this.state.key}&q=${this.state.cityName}&format=json` 
    
    try {
      const response = await axios.get(Url);

      this.setState({
        data:response.data[0],
        latitude:response.data[0].lat,
        longitude:response.data[0].lon,
        error: ''
      });

      this.getWeather(this.state.latitude,this.state.longitude)

    } catch (error) {
      console.log(error.message,error.name)
      
      this.setState({
        error: error.message,
        data:''
      });
    }

  }

  getWeather = async (lat,lon)=>{
    const getWeatherUrl = `http://localhost:3001/weather`
    const weatherResponse = await axios.get(getWeatherUrl);
    console.log(weatherResponse.data);
    this.setState({
      weather:weatherResponse.data
    })
  }

  handelChange = (e)=>{
    console.log(e.target.value);
    this.setState({
      cityName:e.target.value
    })
  }

  render(){
    
    const ImgUrl = `https://maps.locationiq.com/v3/staticmap?key=${this.state.key}&center=${this.state.latitude},${this.state.longitude}&zoom=11&size=734x250&format=png&maptype=roadmap`
    return(
      <>
        <Card className="text-center">
          <Card.Header>City Explorer</Card.Header>
          <Card.Body>
            <Forms handelSubmit = {this.handelSubmit} handelChange={this.handelChange} error={this.state.error} />
            { this.state.data && <Image src= {ImgUrl} fluid />}
          </Card.Body>
          {this.state.data && <Card.Footer className="text-muted">{this.state.data.display_name}</Card.Footer>}
        </Card>
        
        {this.state.weather && <WeatherTable weather = {this.state.weather} />}
      </>
    )
  }
}

export default App