import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import {useParams,Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import Loading from "../components/Loading";
import "../assets/css/Navbar-style.css";
import actionTypes from "../redux/actions/actionTypes";


const SelectedStudent = () => {
    const dispatch=useDispatch()
    const {studentId}=useParams()
    const [student,setStudent]=useState(null)
    const navigate = useNavigate()

    const handleDelete=(id)=>{
        if (window.confirm(`DİKKAT !!! \n${student.firstName} ${student.lastName} Adlı Öğrenci Veritabanından silinecek. Onaylıyor musunuz?`)) {
            // Save it!
            axios.delete(`http://localhost:3005/students/${id}`)
            .then(response=>{
            
            dispatch({type:actionTypes.DELETE_STUDENT,payload:id})
            navigate("/")
            })
            .catch(error=>{}) 
            console.log('onaylandı');
          } else {
            // Do nothing!
            console.log('iptal edildi');
          }
           
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:3005/students/${studentId}`)
        .then(response=>{
            console.log(response.data)
            setStudent(response.data)
        })
        .catch(error=>{console.log(error)})

    },[])
     
    if (student === null){
        return <Loading/>

    }

    return(
        <div>
            <Header/>
            <div className="container d-flex justify-content-center mt-3">
               <div className="selectedLabel">
                <p className="selectedlist">Öğr. No <br/></p>
                <p className="selectedlist">Adı Soyadı<br/></p>
                <p className="selectedlist">Cinsiyeti<br/></p>
                <p className="selectedlist">Okulu<br/></p>
                <p className="selectedlist">Sınıfı<br/></p>
                <p className="selectedlist">Hobileri<br/></p>
                <p className="selectedlist">Okuduğu Kitaplar<br/></p>
               </div>
               <div>        </div>
               <div className="selectedData">
                <p className="selectedlist">{student.number}</p>
                <p className="selectedlist">{student.firstName +" "+ student.lastName}</p>
                <p className="selectedlist">{student.gender}</p>
                <p className="selectedlist">{student.school}</p>
                <p className="selectedlist">{student.class}</p>
                <p className="selectedlist">{student.hobbys.toString()}</p>
                <p className="selectedlist">{student.booksread.toString()}</p>
                    
               </div>
               
            
            </div>
            <div className="d-flex justify-content-center">
                <Link><button>Düzenle</button></Link>
                <button className="ms-3" onClick={()=>handleDelete(studentId)}>Sil</button>
            </div>
           
          
        </div>
    )

}

export default SelectedStudent;
