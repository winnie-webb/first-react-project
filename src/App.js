import React,{useState,useEffect} from 'react';
import "./App.css";

 function App() {
  return (
   <>
   <MoviesList />
   </>
  )
}
function MoviesList() {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
  fetch("http://api.tvmaze.com/search/shows?q=teen")
  .then(res => res.json())
  .then(res => {
    setMovies(res)
  })
  .catch(err => console.log(err.message))
  }, [])
  
return(
 <>
  {movies.map(movie => < Movie  movies={movie}/>)
}
 </>
)
}
function Movie (props) {
  const {image,genres,status,id,name} = props.movies.show;
  let path;
  for( const imagePath in image) if(imagePath === "medium") path = image[imagePath]
  return (
  <>
  <section key={id}>
    <h2>{name}</h2>
    <img src={path} />
    <ul>
      {genres.map(genre => <li>{genre}</li>)}
    </ul>
    <span>{status}</span>
  </section>

  </>
  )
}

export default App;