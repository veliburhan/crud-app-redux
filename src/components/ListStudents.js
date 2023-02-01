import React,{useState} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import "../assets/css/Navbar-style.css";


const ListStudents = () => {
    const studentsState=useSelector(state=>state.studentsState)
    
    
    return (
        
        <div className="container my-2">
                        
        <table className="table table-striped table-hover">
            <thead>
                <tr className="position-relative">
                    <th >S. No</th>
                    <th style={{ width:"100px" }}>Öğr. No</th>
                    <th style={{ width:"350px" }}>Adı Soyadı</th>
                    <th >Cinsiyet</th>
                    <th >Okulu</th>
                    <th >Sınıfı</th>
                    <th >Hobi Sayısı</th>
                    <th >Okuduğu Kitap Sayısı </th>
                    
                </tr>
            </thead>
            <tbody>
                {
                studentsState.students.map((student,index)=>  (
                    
                <tr key={student.id} className="position-relative">
                    <td>{index+1}</td>
                    <td>{student.number}</td>
                    <td><Link className="link stretched-link" to={`/selectedstudent/${student.id}`}>{student.firstName +" " + student.lastName}</Link></td>
                    <td>{student.gender}</td>
                    <td>{student.school}</td>
                    <td>{student.class}</td>
                    <td>{(student.hobbys).length}</td>
                    <td>{(student.booksread).length}</td>
                   
                </tr>
                ))
                }                            
            </tbody>
        </table>
        </div>

    )
}

export default ListStudents