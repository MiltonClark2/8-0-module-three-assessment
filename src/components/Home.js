import { Component } from "react";
import Navbar from "./Navbar";




class Home extends Component{
    render(){
        return(
            <div id="homepage-container">
                <nav>
                    <Navbar />
                </nav>
                <main>
                    <h1>
                        Welcome to GhibliApp
                    </h1>
                </main>
               
  
            </div>
      );
    };
  };
  
export default Home;