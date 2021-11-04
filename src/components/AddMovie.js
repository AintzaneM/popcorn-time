import React, { Component } from 'react'
import "./AddMovie.css"

class AddMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            year: "",
            rating: "",
        }
    }

    // handleTitleChange = (event) => {
    //     this.setState({title: event.target.value})
        
    // }

    // handleYearChange = (event) => {
    //     this.setState({year: event.target.value})

    // }

    // handleRatingChange = (event) => {
    //     this.setState({rating: event.target.value})

    // }

    handleInputChange = (event) => {
        const nameOfTheInput = event.target.name; //it can be title, year, rating//get name of the input
        this.setState({[nameOfTheInput]: event.target.value}) 

    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const movieInfo = {
            title: this.state.title,
            year: this.state.year,
            rating: this.state.rating,
        }
        this.props.addMovieHandler(movieInfo)
    }



    render() {
        return (
            <div className="AddMovie">
                <h2>Add a new movie</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Title:
                        <input 
                            type= "text" 
                            name= "title" 
                            value={this.state.title} 
                            onChange={this.handleInputChange}>

                        </input>
                    </label>

                    <label>
                        Year:
                        <input 
                            type= "number" 
                            name= "year" 
                            value={this.state.year} 
                            min="1900"
                            max="2100"
                            onChange={this.handleInputChange}>

                        </input>
                    </label>

                    <label>
                        Rating:
                        <input 
                            type= "number" 
                            name= "rating" 
                            value={this.state.rating} 
                            min="1"
                            max="10"
                            onChange={this.handleInputChange}>

                        </input>
                    </label>

                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}


export default AddMovie