import { Component } from "react";
import Navbar from "./Navbar";



class Locations extends Component{
    constructor(){
        super()
        this.state = {
            allLocations: [],
        };
    };

    fetchLocations = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                allLocations: data,

            });
        });
    };

    render(){
        return(
            <div className="locations">
                <Navbar />
                <h1>List of Locations</h1>
                <button>Show locations</button>
                <div className="locations-container" >
                    
                </div>
            </div>
        )
    }
};

export default Locations;