import { Component } from "react";
import Navbar from "./Navbar";



class Movies extends Component{
    constructor(){
        super()
        this.state = {
            movies: [],
            currentMovie: null
        };
    };

    fetchMovies = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                movies: data,

            });
        });
    };

    componentDidMount = () => {
        this.fetchMovies();
    };

    handleDropdownChange = (event) => {
        this.setState({
            currentMovie: event.target.value
        });
    };

    render(){
        let dropDownOptions = this.state.movies.map((movie)=>{
            return <option>{movie.title}</option>;
        })

        let currentMovieObject = this.state.movies.find((movie)=>{
            return movie.title === this.state.currentMovie
        })

        return(
            <div className="movies">
                <Navbar />
                <h1>Select a Movie</h1>
                <select onChange={this.handleDropdownChange}>
                    <option></option>
                    {dropDownOptions}
                </select>
                <h3>
                    Title: {currentMovieObject? currentMovieObject.title : null}{" "}
                </h3>
                <h3>
                    Release Date: {currentMovieObject?.release_date}
                </h3>
                <h3>
                    Description: {currentMovieObject?.description}
                </h3>

            </div>
        )
    }
};

export default Movies;
