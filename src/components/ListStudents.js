import React,{useState} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import "../assets/css/Navbar-style.css";


const ListStudents = () => {
    const studentsState=useSelector(state=>state.studentsState)
    
    
    return (
        
        <div className="container my-2">
                        
        <table className="table table-striped">
            <thead>
                <tr>
                    <th >Sıra No</th>
                    <th style={{ width:"50px" }}>Öğr. No</th>
                    <th >Adı</th>
                    <th >Soyadı</th>
                    <th >Cinsiyet</th>
                    <th >Okulu</th>
                    <th >Sınıfı</th>
                    <th >Hobileri</th>
                    <th >Okuduğu Kitaplar</th>
                    <th className="thOgrenciEkle "><Link to="/add-student" className="btn btn-primary">Yeni Kayıt</Link></th>
                </tr>
            </thead>
            <tbody>
                {
                studentsState.students.map((student,index)=>  (
                    
                <tr key={student.id}>
                    <td>{index+1}</td>
                    <td>{student.number}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.gender}</td>
                    <td>{student.school}</td>
                    <td>{student.class}</td>
                    <td>{student.hobbys.toString()}</td>
                    <td>{student.booksread.toString()}</td>
                    <td><Link to={`/selectedstudent/${student.id}`}><button className="btn btn-sm btn-info">Select</button></Link></td>
                </tr>
                ))
                }                            
            </tbody>
        </table>
        </div>

    )
}

export default ListStudents