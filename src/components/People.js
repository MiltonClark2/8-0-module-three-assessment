import { Component } from "react";




class People extends Component {
    constructor(){
        super()
        this.state = {
            people: [],
            currentPerson: null
        };
    };

    fetchPeople = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                people: data,

            });
        });
    };

    componentDidMount = () => {
        this.fetchPeople();
    };

};

export default People;