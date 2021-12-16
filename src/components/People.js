import { Component } from "react";




class People extends Component {
    constructor(){
        super()
        this.state = {
            people: [],
            userInput: ""
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


    handleOnChange = (event) => {
        this.setState({
            userInput: event.target.value
        })

    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        

    }

    render(){
        return(
            <div className="people">
                <h1>
                    Search for a Person
                </h1>
                <form>
                    <input 
                        id="user-input"
                        type="text"
                        placeholder="Find Your Person"
                        onChange={this.handleOnChange}
                    />
                    <button onSubmit={this.handleOnSubmit}>
                        Submit
                    </button>
                </form>

            </div>
        )
    }
};

export default People;