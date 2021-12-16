import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends Component{
    render(){
        return(
            <div id='navbar-container'>
                <nav className='navbar'>
                    <Link to="/">
                        <img src="./assets/movie-logo" />
                    </Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/people">People</Link>
                    <Link to="/locations">Locations</Link>
                </nav>
            </div>
            
        );
    };



};

export default Navbar;

