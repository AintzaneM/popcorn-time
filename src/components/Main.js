import React from "react";
import moviesArr from "../data/movies.json"



function Main() {
   
    return (
        <>
            {moviesArr.map( (movie, index) => {
                return (
                <div className= "movie-container" key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>Year: {movie.year}</p>
                    Rating: {movie.rating}
                </div>
                
                )

            })}
        </>
    );
}




export default Main;