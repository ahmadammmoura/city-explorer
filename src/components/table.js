import React, { Component } from 'react'
import {Table} from 'react-bootstrap';


export class WeatherTable extends Component {
  render() {
  const listOfData = this.props.weather.map((city,index) =>{
    
      return (
        
          <tr key = {index}>
              <td>{index+1}</td>
              <td>{city.description}</td>
              <td>{city.date}</td>
          </tr>
        
      )
  })


  return (
    <>
        <Table striped bordered hover variant="dark" style={{width:"50%",margin:"auto"}} >
          <thead>
            <tr>
              <th>#</th>
              <th>description</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {listOfData}
          </tbody>
        </Table>
    </>
  )
  }
}

export default WeatherTable
