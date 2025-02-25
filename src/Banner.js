import React,{useState,useEffect} from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[ Math.floor(Math.random() * request.data.results.length-1)]); 
                // Math.floor(Math.random() * request.data.results.length-1)
            // a random object or one specific movie
            return request;
        }
        fetchData();
    },[]);

    function truncateText(str,n){
        return str?.length > n ? str.substr(0,n-1)+"..." : str;
    }

    return (

        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}    
                </h1>
{/* api call may not give you what you want so we take any of the three avaialble*/}
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {movie?.overview}
                </h1>
            </div>

            <div className="banner--fadeBottom"></div>
            {/* fade bottom to add a finishing touch to the banner */}
        </header>
    )
}

export default Banner;