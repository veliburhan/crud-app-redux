import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import "../assets/css/Navbar-style.css"

const Footer = () => {
    const studentsState = useSelector(state => state.studentsState)

    const girlstudent=studentsState.students.filter(student => student.gender === "Kız" )
    const boystudent=studentsState.students.filter(student => student.gender === "Erkek")
    

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