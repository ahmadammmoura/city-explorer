import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Image,Form} from 'react-bootstrap';


class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      data:'',
      cityName:'',
      key:'pk.8926f5a6fd8469d023b30b2eaf2a2f79',
      latitude:'',
      longitude:''
    }
  }

   handelSubmit = async (e)=>{
    e.preventDefault();
    console.log(e)
    const Url = `https://us1.locationiq.com/v1/search.php?key=${this.state.key}&q=${this.state.cityName}&format=json` 
    const response = await axios.get(Url);
    console.log(response.data[0])
    this.setState({
      data:response.data[0],
      latitude:response.data[0].lat,
      longitude:response.data[0].lon
    });

  }

  handelChange = (e)=>{
    console.log(e.target.value);
    this.setState({
      cityName:e.target.value
    })
  }

  render(){

    console.log(this.state.data)
    const ImgUrl = `https://maps.locationiq.com/v3/staticmap?key=${this.state.key}&center=${this.state.latitude},${this.state.longitude}&zoom=11&size=734x250&format=png&maptype=roadmap`
    return(
      <>
        <Card className="text-center">
          <Card.Header>City Explorer</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handelSubmit} >
              <Form.Group >
                <Form.Control onChange={this.handelChange} style={{width:'50%',margin:'auto'}} size="lg" type="text" placeholder="Large text" />
                <br/>
                <Button variant="primary" type="submit">Submit</Button>
              </Form.Group>
            </Form>
            { this.state.data ? <Image src= {ImgUrl} fluid /> : ''}
          </Card.Body>
          {this.state.data ? <Card.Footer className="text-muted">{this.state.data.display_name}</Card.Footer> : '' }
        </Card>
        








        {/* <form onSubmit={this.handelSubmit} > 
          <input type = "text" onChange={this.handelChange}/>
          <input type="submit" value="click me"/>
        </form>   */}
      </>
    )
  }
}

export default App