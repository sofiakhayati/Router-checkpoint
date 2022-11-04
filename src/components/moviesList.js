import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import AddMovie from './AddMovie.js'
import MovieCard from './movieCard.js'
import './filtreMovie.css'
import './MovieCard.css'
function MoviesList(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const { movies, addMovieFn} = props
    return (
        <div  style={{display:"flex", justifyContent:"space-around", flexDirection:"column"}}>
            <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
            {movies.map(
                (elt) => (
                    <Link
                      to={`/MovieTrailDesc/${elt.id}`}
                      style={{ textDecoration: "none" }} 
                    >
                      <MovieCard Poster={elt.Poster} Title={elt.Title}  Year={elt.Year} Type={elt.Type} rate={elt.rate} key={elt.id} />{" "}
                    </Link>
                  ) 
            )} 
            </div> 
            <div>
                <h3 className='cd navv'>Add your favourite Movie</h3>
                <button onClick={handleShow} style={{backgroundColor:" rgb(102, 133, 31)",color:"white",fontSize:'170%', border:"5px solid white", width:"50px", height:"50px"}}>+</button>
                <AddMovie handleClose={handleClose} show={show} addMovieFn={addMovieFn}/>  
            </div>
            
        </div>
    )
}
export default MoviesList
