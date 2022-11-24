import React from "react";
import Header from "../components/Header";
import ListStudents from "../components/ListStudents";
import "../assets/css/Navbar-style.css"
import Footer from "../components/Footer";

const Home=()=>{
    return(
        <div className="home positionX">
            <div className="header">
                <Header/>
            </div>
            <div className="liste">
                <ListStudents/>
            </div>
            <div className="">
                <Footer/>
            </div>
            
        </div>
    )
    }

export default Home;