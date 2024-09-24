// Row component
 import movieTrailer from 'movie-trailer';
import React,{ useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import  YouTube  from 'react-youtube';

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    // A snippet of code that runs based on a specific condition
    useEffect(() => {
        async function fetchData(){
            // await will wait for the response via api.
            const request = await axios.get(fetchUrl); // axios has the baseurl
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);// whenever fetchUrl changes useEffect will run and change the layout
    // if [] run only once when row loads and dont run it again
    // if we add movies in [] it will run every time movies state changes
    console.table(movies);
    const options = { // check react youtube documentation
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }
    const [trailerURL,setTrailerUrl]=useState("");
    const getTrailer = (movie) => {
        if(trailerURL){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "").then((url) => {
                const urlParams= new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            
        }
    };
    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            <div className='row__posters '>
                {movies.map(movie => ( //  map over movies to get the images.  
                    <img
                        className={(isLargeRow ? "row__posterLarge":"row__poster")}
                        key={movie.id}
                        onClick={()=> getTrailer(movie)}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={options} />}
        </div>
    );
}

export default Row