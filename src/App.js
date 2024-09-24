import Nav from './Nav';
import './App.css';
import { useState } from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow>

      </Row>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
      
    </div>
  );
}

export default App;


// api
// https://api.themoviedb.org/3/movie/550?api_key=
//e306ef5cb8f39b52e4d4ff3d92a7d1f4

{/* <header className="App-header">
        <h1 style={newStyle}>My count is {count}</h1>
        
        <button onClick={()=>{setCount(count+1)}}>Add Count</button>
      </header> */}