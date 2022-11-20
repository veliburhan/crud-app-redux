import React,{useState} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"


const ListStudents = () => {
    const studentsState=useSelector(state=>state.studentsState)
    
    
    return (
        <div className="container my-2">
            <div className="d-flex justify-content-end">
            <Link to="/add-student" className="btn btn-primary">Öğrenci Ekle</Link>
            </div>
            
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
                    <th >İşlemler</th>
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
                    <td><Link to={`/selectedstudent/${student.id}`}>Select</Link></td>
                </tr>
                ))
                }                            
            </tbody>
        </table>
        </div>

    )
}

export default ListStudents