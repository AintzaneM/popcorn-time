import React from "react";
import moviesArr from "../data/movies.json"
import Movie from "./Movie"
import AddMovie from "./AddMovie"


class Main extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            moviesToDisplay:moviesArr
        };   
    }
    renderClassicsOnly = () => {
        this.setState((prevState, props)=> {
           const newList = prevState.moviesToDisplay.filter((movie) => {
               return movie.year <2000 
            })
            return {moviesToDisplay: newList}
        })
    }

    createMovie = (newMovieDetails) => {
        this.setState((prevState) => {
            const newList = [...prevState.moviesToDisplay, newMovieDetails]
            return {moviesToDisplay : newList }
        })
        
    }

    render() {
        return (
            <>
                <div className="controls">
                    <button onClick={this.renderClassicsOnly}>Display only classic movies</button>
                </div>

                <AddMovie addMovieHandler = {this.createMovie} />

                <div className="movie-list">
                    {this.state.moviesToDisplay.map((movie, index) => {
                        return <Movie key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} />
                    })}
                </div>
            </>
        );
    }
}



export default Main;