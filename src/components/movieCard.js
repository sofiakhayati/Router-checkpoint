import React from 'react'
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './MovieCard.css'
function MovieCard(props) {
    const { Poster, Title, Year, Type, rate} = props
    return (
        <div className="cd">
            <Card  style={{ width: '18rem', height: "31rem", backgroundColor: "white", marginBottom: "40px", border:"5px solid rgb(164, 205, 50)" }}>
                <Card.Img variant="top" src={Poster} style={{ height: "300px" }} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Type}
                    </Card.Text>
                    <Card.Text>
                        {Year}
                    </Card.Text>
                    <Card.Text style={{marginLeft:"70px"}}>
                        
                        <ReactStars 
                            count={5}
                            //onChange={ratingChanged}
                            size={24}
                            activeColor= "rgb(164, 205, 50)"
                            value={rate}
                            edit = {false}
                        />
                        
                     </Card.Text>
      
                </Card.Body>
            </Card>
        </div>
    )
}
export default MovieCard


