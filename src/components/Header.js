import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import "../assets/css/Navbar-style.css"

const Header = () => {
    const studentsState = useSelector(state => state.studentsState)

    const girlstudent=studentsState.students.filter(student => student.gender === "Kız" )
    const boystudent=studentsState.students.filter(student => student.gender === "Erkek")
    

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary header1">
            <div className="container-fluid">
                <div className="">
                    <Link to="/" className="btn btn-primary">Home Page</Link>
                    
                   
                    
                 </div>
                <div className="navbar-brand">
                    <h2> Öğrenci Takip Sistemi v2.0 </h2>
                </div>
                <div className="istatistik">
                <Link to="/statistics" className="nav-link active btn btn-primary">Gelişmiş</Link>
                <Link to="/add-student" className="btn btn-primary thOgrenciEkle mt-2">Yeni Kayıt</Link>                                   
                </div>
            </div>
        </nav>
    )
}

export default Header;