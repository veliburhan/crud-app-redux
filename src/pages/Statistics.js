import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import "../assets/css/Navbar-style.css"



const Statistics=(()=>{
    const studentsState = useSelector(state => state.studentsState)

    const girlstudent=studentsState.students.filter(student => student.gender === "Kız" )
    const boystudent=studentsState.students.filter(student => student.gender === "Erkek")

    return(
        <div>
            <Header/>
            
            <div className="home">
            <div className="">
                 <div className="classlists">
                    
                 </div>


                    
                <h5 className="istatistik inline"> Kız Öğrenci Sayısı: {girlstudent.length} </h5>
                <h5 className="istatistik inline"> Erkek Öğrenci Sayısı: {boystudent.length} </h5>
                <h5 className="istatistik inline"> Toplam Öğrenci Sayısı: {studentsState.students.length} </h5>
            </div>



            </div>
            <div className="">
                <Footer/>
            </div>
        </div>
    )




})


export default Statistics