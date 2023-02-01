import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import backimage from "../assets/image/back2.jpg";
import "../assets/css/Navbar-style.css";


const EditStudent=()=>{

    const {studentId}=useParams();
    const [student,setStudent]=useState(null)
    const [booksRead, setBooksRead] = useState([])
    const [hobbys, setHobbys] = useState([])
    const [classList, setClassList]= useState([])
    const [number, setNumber] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [school, setSchool] = useState("React-Redux İlköğretim Okulu")
    const [stdClass, setStdClass] = useState("")
    const [userinfo,setUserInfo] = useState({hobbyss:[],response:[]})
    const [userinfobook,setUserInfoBook]=useState({bookss:[],responseB:[]})
    


    useEffect(()=>{
        console.log(studentId)
        axios.get(`http://localhost:3005/students/${studentId}`)
        .then(res=>{
            console.log("res.data:",res.data)
            setStudent(res.data)
            setNumber(res.data.number)
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setGender(res.data.gender)
            setSchool(res.data.school)
            setStdClass(res.data.class)
            setHobbys(res.data.hobbys)
            
            setBooksRead(res.data.booksread)
           
            setUserInfo({hobbyss:res.data.hobbys,response:res.data.hobbys})
            setUserInfoBook({bookss:res.data.booksRead,responseB:res.data.booksread})

        })
        .catch(err=>{console.log(err)})

    },[])

    useEffect(()=>{
        axios.get("http://localhost:3005/classlist")
        .then(response=>{     
        setClassList(response.data)           })
        .catch(error=>{console.log(error)})
    
    },[classList])

    console.log("Hobbys:",hobbys)
    console.log("booksRead:",booksRead)
    const handleChangeHobbys = (event => {
        const {value,checked} = event.target;
        const {hobbyss} = userinfo;

        console.log(`${value} is ${checked}`);

        if (checked){
            setUserInfo({
                hobbyss:[...hobbyss,value],
                response:[...hobbyss,value],
            })
            }
        else{
            setUserInfo({
                hobbyss:hobbyss.filter((event)=>event !==value),
                response:hobbyss.filter((event)=> event !== value),
            });
            
        }
    });

    const handleChangeBooks = (event => {
        const {value,checked} = event.target;
        const {bookss} = userinfobook;
       
        if(checked){
            setUserInfoBook({
                bookss:[...bookss,value],
                responseB:[...bookss,value],
            })
        }else{
            setUserInfoBook({
                bookss:bookss.filter((event)=>event !==value),
                responseB:bookss.filter((event)=>event !==value),
            })
        }
    });

    const handleSubmit=(event)=>{
        event.preventDefault();

        //Gerekli olan bütün kutucukların doldurulup doldurulmadığı kontro ediliyor:
         if(!number || !firstName || !lastName || !school){
            alert("* ile işaretli alanlar boş geçilemez.")
            return
        }

        console.log("handle")

    }


    

    if(student===null){
        return <Loading />    
    }

    return(
        <div className="home positionX">
            <div className="header">
                <Header/>
            </div>
            <div className="liste">
                <div className="backimage">
                   <Link to={`/selectedstudent/${student.id}`}> <img className="" src={backimage} /> </Link>
                </div>
            <div className="container d-flex justify-content-center">
                
                <form className="w-40">
                    <div className="mb-3 mt-4">
                    <h4>Öğrenci Bilgileri</h4>
                        <hr></hr>
                        <label
                            
                            htmlFor="number"
                            className="form-label">
                            Öğrenci Numarası</label><span className="red"> *</span>
                        <input
                            value={number}
                            onChange={(event)=>setNumber(event.target.value)}
                            type="number"
                            className="form-control"
                            id="number"
                            required
                        />
                    </div>

                    <div class="mb-3 mt-2">
                        <label
                            htmlFor="firstName"
                            className="form-label">
                            Adı</label><span className="red"> *</span>
                        <input
                            value={firstName}
                            onChange={(event)=>setFirstName(event.target.value)}
                            type="text"
                            class="form-control"
                            id="firstName"
                            required
                        />
                    </div>

                    <div className="mb-3 mt-2">
                        <label
                            htmlFor="lastName"
                            class="form-label">
                            Soyadı</label><span className="red"> *</span>
                        <input
                            value={lastName}
                            onChange={(event)=>setLastName(event.target.value)}
                            type="text"
                            class="form-control"
                            id="lastName"
                            required
                        />
                    </div>

                    <label>Cinsiyet</label><span className="red"> *</span>
                    <div className="mb-3 mt-2 border gender">
                        <div className="form-check form-check-inline">
                            <input class="form-check-input ms-1 mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={gender === 'Kız'} value="Kız" onClick={() => setGender('Kız')}  />
                            <label class="form-check-label mt-1" for="flexRadioDefault1">
                                Kız
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={gender === 'Erkek'} value="Erkek" onClick={() => setGender('Erkek')}  />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Erkek
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 mt-2">
                        <label
                            htmlFor="school"
                            class="form-label">
                            Okulu</label><span className="red"> *</span>
                        <input
                           value={school}
                           onChange={(event)=>setSchool(event.target.value)}
                            type="text"
                            class="form-control"
                            id="school"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="class1" className="form-label">
                            Sınıfı
                        </label><span className="red"> *</span>
                        <select className="select2 form-control" id="class1" value={stdClass} onChange={(event) => setStdClass(event.target.value)}>
                        {
                         classList.map(item => {
                         return (<option key={item.id} value={item}>{item}</option>)
                            })
                        }
                         </select>
                
                    </div>

                    
                    <div className="mt-3">
                        <div className="form-check">
                            <h4>Hobileri</h4>
                            <hr></hr>
                            <input name="hobbyss" className="form-check-input" type="checkbox" checked={hobbys.find(item => item === "Satranç Oynamak")} value="Satranç Oynamak" onChange={handleChangeHobbys} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Satranç Oynamak
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="hobbyss" className="form-check-input" type="checkbox" checked={hobbys.find(item => item === "Fotoğrafçılık")} value="Fotoğrafçılık" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Fotoğrafçılık
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="hobbyss" className="form-check-input" type="checkbox" checked={hobbys.find(item => item === "Seyahat Etmek")} value="Seyahat Etmek" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Seyahat Etmek
                            </label>
                        </div>
                        <div class="form-check">
                            <input name="hobbyss" class="form-check-input" type="checkbox" checked={hobbys.find(item => item === "Kitap Okumak")} value="Kitap Okumak" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Kitap Okumak
                            </label>
                        </div>

                        <div class="form-check">
                            <input name="hobbyss" class="form-check-input" type="checkbox" checked={hobbys.find(item => item === "Resim Yapmak")} value="Resim Yapmak" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Resim Yapmak
                            </label>
                        </div>

                        <div class="form-check">
                            <input name="hobbyss" class="form-check-input" type="checkbox" checked={hobbys.find(item => item === "Tenis Oynamak")} value="Tenis Oynamak" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Tenis Oynamak
                            </label>
                        </div>

                        <div class="form-check">
                            <input name="hobbyss" class="form-check-input" type="checkbox" checked={hobbys.find(item => item === "Bisiklet Kullanmak")} value="Bisiklet Kullanmak" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Bisiklet Kullanmak
                            </label>
                        </div>

                        <div class="form-check">
                            <input name="hobbyss" class="form-check-input" type="checkbox" checked={hobbys.find(item => item === "Yüzmek")} value="Yüzmek" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Yüzmek
                            </label>

                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="form-check">
                            <h4>Okuduğu Kitaplar</h4>
                            <hr></hr>
                            <input class="form-check-input" type="checkbox" checked={booksRead.find(item => item === "80 Günde Devri Alem-Jules Verne")} value="80 Günde Devri Alem-Jules Verne" onChange={handleChangeBooks} id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                80 Günde Devri Alem-Jules Verne
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" checked={booksRead.find(item => item === "Sefiller-Victor Hugo")} value="Sefiller-Victor Hugo" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Sefiller-Victor Hugo
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" checked={booksRead.find(item => item === "Çizgili Pijamalı Çocuk-John Boyne")} value="Çizgili Pijamalı Çocuk-John Boyne" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Çizgili Pijamalı Çocuk-John Boyne
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" checked={booksRead.find(item => item === "Beyaz Diş-Jack London")} value="Beyaz Diş-Jack London" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Beyaz Diş-Jack London
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" checked={booksRead.find(item => item === "Troya Masalı-Azra Erhat")} value="Troya Masalı-Azra Erhat" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Troya Masalı-Azra Erhat
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" checked={booksRead.find(item => item === "Alice Harikalar Diyarında-Lewis Carrol")} value="Alice Harikalar Diyarında-Lewis Carrol" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Alice Harikalar Diyarında-Lewis Carrol
                            </label>
                        </div>

                        <div class="form-check">                            
                            <input class="form-check-input" type="checkbox" checked={booksRead.find(item => item === "Son Adanın Çocukları-Zülfi Livaneli")} value="Son Adanın Çocukları-Zülfi Livaneli" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Son Adanın Çocukları-Zülfi Livaneli
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" checked={booksRead.find(item => item === "Pal Sokağı Çocukları-Ferenc Molnar")} value="Pal Sokağı Çocukları-Ferenc Molnar" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Pal Sokağı Çocukları-Ferenc Molnar
                            </label>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-5">
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100 mb-4">Güncelle</button>
                    </div>

                </form>
            </div >
            </div>
            <div className="">
                <Footer/>
            </div> 
        </div>

    )
}

export default EditStudent;