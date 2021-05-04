import React, { Component } from 'react'
import {Card,Button,Image,Form} from 'react-bootstrap';


export class Forms extends Component {
    render() {
        return (
            <>
              <Form onSubmit={this.props.handelSubmit} >
                <Form.Group >
                  <Form.Control onChange={this.props.handelChange} style={{width:'50%',margin:'auto'}} size="lg" type="text" placeholder="Large text" />
                  <br/>
                  <Button variant="primary" type="submit">Explore!</Button>
                </Form.Group>
                {this.props.error ? <p style={{color:'red'}} >{this.props.error}</p>:''}
              </Form>
            </>
        )
    }
}

export default Forms
