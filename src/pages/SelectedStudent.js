import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import {useParams,Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import Loading from "../components/Loading";
import "../assets/css/Navbar-style.css";
import actionTypes from "../redux/actions/actionTypes";
import myimage from "../assets/image/student.png";
import Footer from "../components/Footer";



const SelectedStudent = () => {
    const dispatch=useDispatch()
    const {studentId}=useParams()
    const [student,setStudent]=useState(null)
    const navigate = useNavigate()

    const handleDelete=(id)=>{
        if (window.confirm(`DİKKAT !!! \n${student.firstName} ${student.lastName} adlı öğrenci veritabanından silinecek. Onaylıyor musunuz?`)) {
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
            setStudent(response.data)
        })
        .catch(error=>{console.log(error)})

    },[])
     
    if (student === null){
        return <Loading/>

    }

    return(
        <div className="home positionX">
           <div className="header">
                <Header/>
           </div>
           <div className="liste">
            <div className="container d-flex justify-content-center mt-5 h-5">
               <div>
               <img className="image mx-5 mt-5" src={myimage} />
               </div>
               <div className="selectedLabel mt-5">
                <p className="selectedlist">Öğr. No <br/></p>
                <p className="selectedlist">Adı Soyadı<br/></p>
                <p className="selectedlist">Cinsiyeti<br/></p>
                <p className="selectedlist">Okulu<br/></p>
                <p className="selectedlist">Sınıfı<br/></p>
                <p className="selectedlist">Hobileri<br/></p>
                <p className="selectedlist">Okuduğu Kitaplar<br/></p>
               </div>
               <div>        </div>
               <div className="selectedData mt-5">
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
                <Link to={`/editstudent/${student.id}`}><button className="btn btn-edit">Düzenle</button></Link>
                <button className="ms-1 btn btn-del" onClick={()=>handleDelete(studentId)}>Sil</button>
            </div>
            </div>
            <div className="">
                <Footer/>
            </div>
          
        </div>
    )

}

export default SelectedStudent;
