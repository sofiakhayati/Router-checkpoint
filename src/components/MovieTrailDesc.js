import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import {useState, useEffect} from "react"

function MovieTrailDesc({movies}) {
  const [movie, setmovie] = useState({});
  const navigate = useNavigate();
  const param = useParams();
  const SelectionMovie = () => {
    setmovie(movies.find((el) => +param.movieid === el.id));
  };

  useEffect(() => {
    SelectionMovie();
  });
  return (
  <Container>
    <div style={{ textAlign: "center", paddingBottom: "50px" }}>
      <iframe
        width="853"
        height="480"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3 style={{ color: "white", textAlign: "justify" }}>{movie.desc}</h3>
      <button className="button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  </Container> 

  )
}
export default MovieTrailDesc
