import React from "react";
import { useSelector } from "react-redux";


import "../assets/css/Navbar-style.css"

const Footer = () => {
    const studentsState = useSelector(state => state.studentsState)

   
    

    return (
        
        <nav className="navbar navbar-expand-md navbar-dark bg-primary footer1">
            <div className="container-fluid">
                <div className="">
                                   
                    
                 </div>
                <div className="navbar-brand">
                    <h2> Footer </h2>
                </div>
                <div className="istatistik">
                                                       
                </div>
            </div>
        </nav>
    )
}

export default Footer;