import React from "react";
import Header from "../components/Header";
import ListStudents from "../components/ListStudents";
import "../assets/css/Navbar-style.css"

const Home=()=>{
    return(
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="liste">
                <ListStudents/>
            </div>
            
        </div>
    )
    }

export default Home;