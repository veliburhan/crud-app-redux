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
                    <Link to="/" className="ogrenci_listesi nav-link active">Home Page</Link>
                    <Link to="/statistics" className="ogrenci_listesi nav-link active">İstatistikler</Link>
                   
                    
                 </div>
                <div className="navbar-brand">
                    <h2> Öğrenci Kayıt Sistemi </h2>
                </div>
                <div className="istatistik">
                    
                    <h5 className="istatistik"> Kız Öğrenci Sayısı: {girlstudent.length} </h5>
                    <h5 className="istatistik"> Erkek Öğrenci Sayısı: {boystudent.length} </h5>
                    <h5 className="istatistik"> Toplam Öğrenci Sayısı: {studentsState.students.length} </h5>

                
                </div>
            </div>
        </nav>
    )
}

export default Header;