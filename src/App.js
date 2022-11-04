import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MoviesList from "./components/moviesList";
import FiltreMovie from "./components/filtreMovie";
import { Container } from "react-bootstrap";
import{Routes, Route } from "react-router-dom"
import MovieTrailDesc from "./components/MovieTrailDesc";


function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      Poster:
        "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
      Title: "Jhon Wick",
      Year: 2016,
      rate: 4,
      Type: "movie",
      trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
      desc: "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.",
    },
    {
      id: Math.random(),
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      Title: "Avatar",
      Year: 2017,
      rate: 2,
      Type: "movie",
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
      desc: "Jake, who is paraplegic, replaces his twin on the Navi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
    },
    {
      id: Math.random(),
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      Title: "Iron Man 2",
      Year: 2020,
      rate: 5,
      Type: "series",
      trailer: "https://www.youtube.com/embed/BoohRoVA9WQ",
      desc: "Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",
    },
    {
      id: Math.random(),
      Poster:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      Title: "Batman",
      Year: 2012,
      rate: 5,
      Type: "cartoon",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
      desc: "Batman is a superhero who appears in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.",
    },
    {
      id: Math.random(),
      Poster:
        "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      Title: "Deadpool 2",
      Year: 2010,
      rate: 4,
      Type: "series",
      trailer: "https://www.youtube.com/embed/D86RtevtfrA",
      desc: "Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell.",
    },
    {
      id: Math.random(),
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      Title: "Jumnanji",
      Year: 2018,
      rate: 3,
      Type: "movie",
      trailer: "https://www.youtube.com/embed/2QKg5SZ_35I",
      desc: "Jumanji: Welcome to the Jungle is a 2017 American fantasy adventure comedy film directed by Jake Kasdan, co-written by Chris McKenna, Erik Sommers, Scott Rosenberg, and Jeff Pinkner, and starring Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Nick Jonas, and Bobby Cannavale",
    },
    {
      id: Math.random(),
      Poster:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      Title: "Vikings",
      Year: 2002,
      rate: 1,
      Type: "series",
      trailer: "https://www.youtube.com/embed/Auzs95InJzo",
      desc: "Ragnar Lothbrok, a legendary Norse hero, is a mere farmer who rises up to become a fearless warrior and commander of the Viking tribes with the support of his equally ferocious family.",
    },
  ]);

  //state filtre
  const [keyword, setKeyword] = useState("");
  const [rating, setRating] = useState(0);
  const addMovieFn = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Container>
          
      <div
        style={{
          border: "3px solid rgb(164, 205, 50)",
          margin: "2%",
          paddingLeft: "30%",
          backgroundColor: "  rgb(206, 223, 176)",
        }}
      >
        <FiltreMovie setKeyword={setKeyword} setRating={setRating} />
      </div>
      <div style={{ backgroundColor: "gray", margin: "2%", padding: "1%" }}>
        <MoviesList
          addMovieFn={addMovieFn}
          movies={movies.filter(
            (e) =>
              e.rate >= rating &&
              e.Title.toUpperCase().includes(keyword.toUpperCase().trim())
          )}
        />
      </div>
      </Container>}/>
      <Route
          path="/MovieTrailDesc/:movieid"
          element={<MovieTrailDesc movies={movies}/>}
        />
        <Route path="/Home" element={<MoviesList />}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
