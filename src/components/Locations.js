import { Component } from "react";
import Navbar from "./Navbar";



class Locations extends Component{
    constructor(){
        super()
        this.state = {
            display: "Show locations",
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

    componentDidMount = () => {
        this.fetchLocations();
    };

    handleButtonClick = () => {
        this.setState({
            display: "Hide locations"
        })

    } 

    render(){

        let locationsToDisplay = this.state.allLocations.map((location) => {
            return(
                <div className="location-display">
                    <ul className="location-list">
                        <li>
                            <h3>Name: {location.name} </h3>
                            <h3>Climate: {location.climate} </h3>
                            <h3>Terrain: {location.terrain} </h3>
                        </li>
                    </ul>
                </div>
            )
        })

        return(
            <div className="locations">
                <Navbar />
                <h1>List of Locations</h1>
                <input
                    type="button"
                    value={this.display}
                    onClick={this.handleButtonClick}
                />
                <div className="locations-container" >
                    { locationsToDisplay }
                </div>
            </div>
        )
    }
};

export default Locations;