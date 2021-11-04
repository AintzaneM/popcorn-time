import React from "react";

function Movie (props) {
    const isPopular = props.rating;
    function popular () {
        if(isPopular > 8) {
            return "POPULAR"
        } else {
            return "NOT POPULAR"
        }
    }
    return (
        <div className="movie-container">
            <h2>{props.title}</h2>
            <p>Year: {props.year}</p>
            <p>Rating: {props.rating}</p>
            <p className="popular"><strong>{popular(isPopular)}</strong> </p>
        </div>
    )
}
export default Movie;