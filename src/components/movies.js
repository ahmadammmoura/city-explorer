import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap';
export class Movies extends Component {
  render() {
    const listOfMovies = this.props.movies.map(movie =>{
      const URL = 'https://www.themoviedb.org/t/p/original'
      return (
        <Card style={{ width: '18rem' , margin:'10px',border:'5px solid black' }}>
          <Card.Img variant="top" src={URL+movie.image_url}/>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              {movie.overview}
            </Card.Text>
            <Card.Text>
            released on : {movie.released_on}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })



    return (
        <div style={{width:'100%'}} >
          {listOfMovies}
        </div>
    )
  }
}

export default Movies
